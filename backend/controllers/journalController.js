const Journal = require("../models/journal.js");
const { analyzeJournal } = require("../services/llmService");


exports.createJournal = async (req, res) => {
    try {

        const { userId, ambience, text } = req.body;

        const analysis = await analyzeJournal(text);
        const jsonMatch = analysis.match(/{[\s\S]*}/);

        const parsed = JSON.parse(jsonMatch[0]);

        const journal = await Journal.create({
            userId,
            ambience,
            text,
            emotion: parsed.emotion,
            keywords: parsed.keywords,
            summary: parsed.summary
        });

        res.status(201).json(journal);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getJournals = async (req, res) => {
    try {

        const journals = await Journal.find({
            userId: req.params.userId
        });

        res.json(journals);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.analyzeJournalText = async (req, res) => {
    try {

        const { text } = req.body;

        const analysis = await analyzeJournal(text);
        const cleaned = analysis.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(cleaned);
        res.json(parsed);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getInsights = async (req, res) => {
    try {

        const userId = req.params.userId;

        const entries = await Journal.find({ userId });

        const totalEntries = entries.length;

        const emotionCount = {};
        const ambienceCount = {};
        const keywords = [];

        entries.forEach(e => {
            emotionCount[e.emotion] = (emotionCount[e.emotion] || 0) + 1;
            ambienceCount[e.ambience] = (ambienceCount[e.ambience] || 0) + 1;

            if (e.keywords) {
                keywords.push(...e.keywords);
            }
        });

        const topEmotion = Object.keys(emotionCount)
            .reduce((a, b) => emotionCount[a] > emotionCount[b] ? a : b);

        const mostUsedAmbience = Object.keys(ambienceCount)
            .reduce((a, b) => ambienceCount[a] > ambienceCount[b] ? a : b);

        const recentKeywords = [...new Set(keywords)].slice(0, 5);

        res.json({
            totalEntries,
            topEmotion,
            mostUsedAmbience,
            recentKeywords
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
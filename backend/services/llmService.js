const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeJournal(text){

    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = `
Analyze the following journal entry.

Return JSON in this format:
{
 "emotion": "",
 "keywords": [],
 "summary": ""
}

Journal:
${text}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return response;
}

module.exports = { analyzeJournal };
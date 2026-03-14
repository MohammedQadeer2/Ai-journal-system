const express = require("express");
const router = express.Router();
const { analyzeJournalText } = require("../controllers/journalController");
const { getInsights } = require("../controllers/journalController");
const {
createJournal,
getJournals
} = require("../controllers/journalController");

router.post("/",createJournal);
router.get("/:userId",getJournals);
router.post("/analyze",analyzeJournalText);
router.get("/insights/:userId",getInsights);
module.exports = router;
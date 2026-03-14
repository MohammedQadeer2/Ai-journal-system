const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const journalRoutes = require("./routes/journalRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("AI Journal API Running");
});

app.use("/api/journal",journalRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
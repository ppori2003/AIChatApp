import express from "express";
import axios from "axios"; // can call apis using axios
import { openai } from '../index.js';

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
    try{
        const { text, activeChatId } = req.body;
        res.status(200).json({ text });

    } catch(error) {
        console.error("error", error);
        res.status(500).json({ error: error.message })
    }
});

export default router;
import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

router.post("/", async (req, res) => {
    const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    });

  try {
    const { query, products } = req.body;

    const prompt = `
You are an AI shopping assistant.

Available products:

${JSON.stringify(products, null, 2)}

Customer request:
"${query}"

Return ONLY valid JSON.

Format:

{
  "recommendations":[
    {
      "id":1,
      "reason":"Reason why this product matches"
    }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text.trim();

    // Remove markdown code fences if Gemini adds them
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(cleaned);

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate recommendations.",
    });
  }
});

export default router;
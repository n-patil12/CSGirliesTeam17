import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

// Prompt builder
function generatePrompt(entry) {
  return `
You are an emotion detection model. Given the following journal entry, determine the primary emotion expressed. 
Respond with just one of the following emotion categories: 
["happy", "sad", "angry", "anxious", "neutral", "excited", "lonely", "confused", "relaxed"].

Journal Entry:
"${entry}"

Primary emotion:
  `.trim();
}

// Get user's emotion from journal entry
export const getEmotion = async (req, res) => {
  const { entry } = req.body;

  try {
    const result = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: generatePrompt(entry) }] }],
    });

    const text = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const emotion = text.trim().toLowerCase();

    res.json({ emotion });

    // TODO: Save entry + emotion to DB

  } catch (err) {
    console.error('Gemini Error:', err.message);
    res.status(500).json({ error: 'Failed to analyze emotion' });
  }
};

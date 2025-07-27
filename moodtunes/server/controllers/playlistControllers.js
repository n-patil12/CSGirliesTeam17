import { GoogleGenAI } from '@google/genai';
import { getPlaylistByEmotion } from '../services/youtubeService.js';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

// Prompt builder
function generatePlaylistPrompt(entry) {
  return `
You are a mood analysis and music recommendation assistant.

First, read the journal entry and identify the primary emotion expressed. Respond with just one of the following categories:
["happy", "sad", "angry", "anxious", "neutral", "excited", "lonely", "confused", "relaxed"]

Then, based on that emotion, generate a keyword or phrase that can be used to search for a YouTube songs that matches the user's emotional state. 
Make it expressive and tailored — not generic.
Do not include any extra explanation or punctuation.
Include words like "music", "songs", or genre references.

Respond with *only* the following raw JSON. Do NOT add backticks, markdown, or any explanations.:

{
  "emotion": "<emotion>",
  "keyword": "<search keyword>"
}

Journal Entry:
"${entry}"
  `.trim();
}



// Get user's emotion from journal entry and generate a playlist
export const getPlaylist = async (req, res) => {
  const { entry } = req.body;

  try {
    const result = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: generatePlaylistPrompt(entry) }] }],
    });

    const text = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const { emotion, keyword } = JSON.parse(text.trim());


    //Get playlist
    console.log("Keyword for playlist search:", keyword);
    const playlist = await getPlaylistByEmotion(keyword);

    res.json({ emotion, playlist });

    // TODO: Save entry + emotion + playlist to DB

  } catch (err) {
    console.error('Gemini Error:', err.message);
    res.status(500).json({ error: 'Failed to analyze emotion and fetch playlist' });
  }
};

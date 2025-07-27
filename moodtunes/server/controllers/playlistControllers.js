import { GoogleGenAI } from '@google/genai';
import sql from 'mssql';
import pool from '../db/dbConfig.js';
import crypto from 'crypto';
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

And finally, create a playlist title that reflects the emotion and the keyword.

Respond with *only* the following raw JSON. Do NOT add backticks, markdown, or any explanations.:

{
  "emotion": "<emotion>",
  "keyword": "<search keyword>",
  "playlist_name": "<playlist name>"
}

Journal Entry:
"${entry}"
  `.trim();
}

export const createPlaylist = async (req, res) => {
  const { entry, id } = req.body;
  console.log("Creating playlist for user:", id, "with entry:", entry);

  try {
    // Generate emotion and keyword using Gemini
    const result = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: generatePlaylistPrompt(entry) }] }],
    });

    const text = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const { emotion, keyword, playlist_name } = JSON.parse(text.trim());

    console.log("Detected emotion:", emotion);
    console.log("Keyword for playlist search:", keyword);
    console.log("Generated playlist name:", playlist_name);

    // Get playlist by emotion
    const { playlist, videoIds } = await getPlaylistByEmotion(keyword);

    // Generate custom playlist ID and CSV string
    const playlist_id = crypto.randomInt(1, 1000000);
    const csvSongs = videoIds.join(',');

    // Insert playlist into the database
    await pool.request()
      .input('id', sql.Int, playlist_id)
      .input('user_id', sql.Int, id)
      .input('playlist_name', sql.VarChar, playlist_name)
      .input('songs', sql.Text, csvSongs)
      .query(`
        INSERT INTO Playlists (id, user_id, playlist_name, songs)
        VALUES (@id, @user_id, @playlist_name, @songs)
      `);

    res.status(200).json({ emotion, playlist, playlist_id });

  } catch (err) {
    console.error('Error creating playlist:', err.message);
    res.status(500).json({ error: 'Failed to analyze emotion and save playlist' });
  }
};

export const getPlaylists = async (req, res) => {
  const user_id  = 406433;
  console.log("Retrieving playlists for user:", user_id);

  try {
    const result = await pool.request()
      .input('user_id', sql.Int, user_id)
      .query(`
        SELECT playlist_name, songs
        FROM Playlists
        WHERE user_id = @user_id
      `);

    console.log("Playlists data:", result.recordset);
    const playlists = result.recordset.map(row => ({
      playlist_name: row.playlist_name,
      videoIds: row.songs.split(',') 
    }));

    res.status(200).json(playlists);

  } catch (err) {
    console.error('Error retrieving playlists:', err.message);
    res.status(500).json({ error: 'Failed to retrieve playlists' });
  }
};
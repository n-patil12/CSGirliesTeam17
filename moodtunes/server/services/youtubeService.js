import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const url = `https://www.googleapis.com/youtube/v3/search`;

export const getPlaylistByEmotion = async (keywords) => {
    try {
        const response = await axios.get(url, {
            params: {
                part: 'snippet',
                maxResults: 10,
                q: keywords || 'mood music',
                type: 'video',
                videoCategoryId: 10,
                key: YOUTUBE_API_KEY,
            }
        });

        const playlist = response.data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));

        return playlist
    } catch (error) {
        console.error('YouTube API Error:', error.message);
    }
}
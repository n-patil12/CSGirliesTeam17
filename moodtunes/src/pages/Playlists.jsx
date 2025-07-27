import './Playlists.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HeaderComponent } from '../components/Header';
import { FooterComponent } from '../components/Footer';
import SongBox from '../components/SongBox';
import { useUser } from '../context/userContext';
import axios from 'axios';

export default function Playlists() {
  const [videoIds, setVideoIds] = useState([]);
  const { userId } = useUser();

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/playlists/${userId}`);
        const playlists = res.data;

        if (playlists.length > 0) {
          setVideoIds(playlists[0].videoIds); // Use the first playlist's videoIds
        }
      } catch (error) {
        console.error('Failed to fetch playlists:', error.message);
      }
    };

    fetchUserPlaylists();
  }, []);

  const handleVideoClick = (id) => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    window.open(url, '_blank');
  };

  return (
    <div className="playlists-page">
      <HeaderComponent />
      <div className="content-wrap">
        <h2 className="playlist-title">Your Mood-Based Playlists</h2>
        <div className="playlist-grid">
          {videoIds.map((id, index) => (
            <SongBox key={index} videoIds={[id]} onVideoClick={handleVideoClick} />
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

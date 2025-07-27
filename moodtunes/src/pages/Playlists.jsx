import './Playlists.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HeaderComponent } from '../components/Header';
import { FooterComponent } from '../components/Footer';
import SongBox from '../components/SongBox';
import axios from 'axios';

export default function Playlists() {
  const [videoIds, setVideoIds] = useState([]);

  // You can fetch mock playlist or useEffect to load saved one
  useEffect(() => {
    const fetchMockPlaylist = async () => {
      const entry = "Feeling good and productive"; // Example entry
      const res = await axios.post('http://localhost:3001/playlist', { entry });
      const playlist = res.data.playlist;
      setVideoIds(playlist.map(song => song.id));
    };

    fetchMockPlaylist();
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

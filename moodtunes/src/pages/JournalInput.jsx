import './Journal.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { HeaderComponent } from '../components/Header';
import { FooterComponent } from '../components/Footer';
import SongBox from '../components/SongBox';
import { useUser } from '../context/userContext';
import axios from 'axios';


export default function JournalInput() {
    const [entry, setEntry] = useState("");
    const [videoIds, setVideoIds] = useState([]);
    const { userId } = useUser();
    const id = userId

    const handleAnalyze = async () => {
        console.log("Analyzing mood for entry:", {entry, id});
        const res = await axios.post('http://localhost:3001/playlist', { entry, id });
        if (res.status !== 200) {
            console.error("Error analyzing mood:", res.data);
            return;
        }

    const data = res.data;
    const emotion = data.emotion;
    const playlist = data.playlist;
    setVideoIds(playlist.map(song => song.id));
    console.log("Detected emotion:", emotion);
    console.log("Playlist data:", playlist);
    };

    const handleVideoClick = (id) => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    window.open(url, '_blank');
  };
  return (
    <div className="page">
      <HeaderComponent />
      <div className="content-wrap">
      <h1 className="journal-title"> Welcome to your journal! Write away! </h1>

        <div className="input-container">
          <textarea 
          className="journal-textarea" 
          value={entry}
          placeholder="What's on your mind?"
          onChange={(e) => setEntry(e.target.value)}>
          </textarea>
        </div>
      <div style={{textAlign: 'right'}}>
        <button onClick={handleAnalyze} className="button-analyze">
        Submit
        </button>
      </div>

      {/* //TODO: Only display the next section when songsBoxes isn't empty */}
      <div>
        <p> Songs curated to your current mood...</p>

        <div>
          <div className="song-box">
            <SongBox videoIds={videoIds} onVideoClick={handleVideoClick} />
          </div>
        </div>
      </div>
      </div>
      <FooterComponent />

    </div>
  );
}

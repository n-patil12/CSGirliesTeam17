import './Journal.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { HeaderComponent } from '../components/Header';
import { FooterComponent } from '../components/Footer';
import axios from 'axios';


export default function JournalInput() {
    const [entry, setEntry] = useState("");

    const handleAnalyze = async () => {
        console.log("Analyzing mood for entry:", {entry});
        const res = await axios.post('http://localhost:3001/playlist', { entry });
        if (res.status !== 200) {
            console.error("Error analyzing mood:", res.data);
            return;
        }

    const data = res.data;
    const emotion = data.emotion;
    const playlist = data.playlist;
    console.log("Detected emotion:", emotion);
    console.log("Playlist data:", playlist);
    };
  return (
    <div className="journal-page">
      <HeaderComponent />

      <p className="journal-title"> Welcome to your journal! Write away! </p>

        <div className="input-container">
          <textarea 
          className="journal-textarea" 
          value={entry}
          placeholder="What's on your mind?"
          onChange={(e) => setEntry(e.target.value)}>
          </textarea>
        </div>
      <div style={{textAlign: 'right', marginRight: '8 vw'}}>
        <button onClick={handleAnalyze} className="button-analyze">
        Submit
        </button>
      </div>

      {/* //TODO: Only display the next section when songsBoxes isn't empty */}
      <div>
        <p> Songs curated to your current mood...</p>
      </div>
      <FooterComponent />

    </div>
  );
}

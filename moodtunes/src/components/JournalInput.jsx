import './Journal.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';


export default function JournalInput() {
    const [entry, setEntry] = useState("");

    const handleAnalyze = async () => {
        console.log("Analyzing mood for entry:", entry);
        const res = await axios.post('http://localhost:3001/emotion/analyze', {entry});
        if (res.status !== 200) {
            console.error("Error analyzing mood:", res.data);
            return;
        }

    const data = res.data;
    const emotion = data.emotion;
    console.log("Detected emotion:", emotion);
    };
  return (
    <div className="journal-page">
      <header className="header">
        <h2 className="logo">MoodTunes</h2>
      </header>

      <h2 className="journal-title"> Journal </h2>

        <div className="input-container">
          <textarea 
          className="journal-textarea" 
          value={entry}
          placeholder="What's on your mind?"
          onChange={(e) => setEntry(e.target.value)}>
          </textarea>
        </div>

        <button onClick={handleAnalyze} className="button-analyze">
        Analyze Mood
      </button>

    </div>
  );
}

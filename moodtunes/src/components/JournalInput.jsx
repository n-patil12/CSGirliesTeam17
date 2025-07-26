import './Journal.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

export default function JournalInput() {
    const [entry, setEntry] = useState("");
    // const { setMood } = useContext(MoodContext);

    const handleAnalyze = async () => {
        console.log("Analyzing mood for entry:", entry);
        // const mood = await analyzeMood(entry);
        // setMood(mood);
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

import './Landing.css';
import { useNavigate } from 'react-router-dom';
import { HeaderComponent } from '../components/Header';
import EmotionIcons from '../components/EmotionIcons';
import PlaylistBox from '../components/PlaylistBox';
import { FooterComponent } from '../components/Footer';
import { useUser } from '../context/userContext';

export default function LandingPage() {
  const navigate = useNavigate();
  const { userId } = useUser();
  console.log("User ID from context:", userId);

  return (
  <div className="page">
    <HeaderComponent />

    <div className="content-sections content-wrap">
      <div className="mood-section">
        <p className="landing-text">What's your mood today?</p>
        <EmotionIcons onSelect={(emotion) => console.log(emotion)} />
      </div>

      <div className="playlist-section">
        <p className="landing-text">Your Tunes</p>
      <div className="playlist-boxes">
        <PlaylistBox onSelect={() => navigate('/playlists')} />
        <PlaylistBox onSelect={() => navigate('/playlists')} />
      </div>
      </div>
    </div>

    <FooterComponent />
  </div>
);

}

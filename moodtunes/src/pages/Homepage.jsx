import './Homepage.css';
import { FiMusic, FiEdit3, FiCompass } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { HeaderComponent } from '../components/Header';
import { FooterComponent } from '../components/Footer';
import StarCard from '../components/StarCard';
import Chatbot from './ChatBot';
export default function Homepage() {
  const navigate = useNavigate(); 
 
  return (
    <div className="page">
      <HeaderComponent />
      <div className="content-wrap">
       
        <div className="text-content">
          <h1>Express Your Mood with Music.</h1>
          <p>
            Write a journal entry, and MoodTunes will find a playlist that perfectly fits how you feel. Discover music that resonates with your emotions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={() => navigate('/signup')} className="button-primary">Sign Up</button>
            <button onClick={() => navigate('/signin')} className="button-secondary">Sign In</button>
          </div>
        </div>
        {/* <div className='stars'>
          <div className="star-card">
            <StarCard 
              text="Music recommendations tailored to your unique moods and feelings."
              backgroundColor="#f3ee86ff"
              textColor="#888210ff"
              textAlign="center"
            />
          </div>

          <div className="star-card">
            <StarCard 
              text="Simple text to express your emotions anytime, anywhere."
              backgroundColor="#f57fceff"
              textColor="#88105aff"
              textAlign="center"
            />
          </div>

          <div className="star-card">
            <StarCard 
              text="Explore new music genres and artists based on your mood trends."
              backgroundColor="#82efc9ff"
              textColor="#06965cff"
              textAlign="center"
            />
          </div>
        </div> */}
        


      <section className="features">
        <div className="feature-card">
          <div className="icon"><FiMusic size={40} /></div>
          <h3>Personalized Playlists</h3>
          <p>Music recommendations tailored to your unique mood and feelings.</p>
        </div>
        <div className="feature-card">
          <div className="icon"><FiEdit3 size={40} /></div>
          <h3>Easy Journal Entry</h3>
          <p>Simple text input to express your emotions anytime, anywhere.</p>
        </div>
        <div className="feature-card">
          <div className="icon"><FiCompass size={40} /></div>
          <h3>Limitless Discovery</h3>
          <p>Explore new music genres and artists based on your mood trends.</p>
        </div>
      </section>
      </div>
      


    </div>
  );
}

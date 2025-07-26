import './signInPage.css';
import { FiMusic, FiEdit3, FiCompass } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function signInPage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h2 className="logo">MoodTunes</h2>
      </header>
      
      <section className="hero">
        <div className="text-content">
          <h1>Welcome Back!</h1>
          <div className='inputs-div'>
            <input type= 'text' className="input-primary"></input>
            <input type= 'password' className="input-secondary"></input>
          </div>
        </div>

      </section>

      <section id= "side_panel">

      </section>


    </div>
  );
}

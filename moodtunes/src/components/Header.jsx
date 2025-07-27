import '../App.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <div> 
      <header className="header">
        <img
          src={logo}
          alt="Logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <nav style={{ right: '2rem', fontSize: "25px"}}>
          <ul>
            <li onClick={() => navigate('/home')}>Home</li>
            <li onClick={() => navigate('/journal')}>Journal</li>
            <li onClick={() => navigate('/playlists')}>Playlists</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};


export { HeaderComponent };

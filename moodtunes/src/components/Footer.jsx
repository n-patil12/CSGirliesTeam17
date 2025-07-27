import '../App.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const FooterComponent = () => {
  const navigate = useNavigate();

  return (
    <div> 
      <footer className="footer">
        <div>
          <FaUserCircle size={30} color="#ffffffff" style={{ cursor: 'pointer' }} />
        </div>
        <div>
          <button onClick={() => navigate('/')}>Logout</button>
        </div>
      </footer>
    </div>
  );
};


export { FooterComponent };

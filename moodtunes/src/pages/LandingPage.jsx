import './Landing.css';
import logo from '../assets/logo.png';
import { FiMusic, FiEdit3, FiCompass } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { HeaderComponent } from '../components/Header';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div> 
      <HeaderComponent />
      </div>

  );
}

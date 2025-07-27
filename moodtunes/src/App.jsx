import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignInPage from './pages/signInPage';
import SignUpPage from './pages/signUpPage';

import JournalPage from './pages/JournalInput';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

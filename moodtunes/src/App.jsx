import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext';

import Homepage from './pages/Homepage';
import SignInPage from './pages/signInPage';
import SignUpPage from './pages/signUpPage';
import JournalPage from './pages/JournalInput';
import LandingPage from './pages/LandingPage';
import PlaylistPage from './pages/Playlists';

function App() {
  return (
    <UserProvider> {/* <-- Wrap with the provider */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/playlists" element={<PlaylistPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

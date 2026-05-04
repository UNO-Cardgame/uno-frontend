import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRoom from './components/CreateRoom';
import JoinRoom from './components/JoinRoom';
import Game from './components/Game';
import StartPage from './components/StartPage';
import LandingPage from './components/LandingPage';
import AuthCallback from './components/AuthCallback';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth flow */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />

        {/* Game flow (requires auth) */}
        <Route path="/home" element={<StartPage />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;

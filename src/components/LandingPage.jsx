import React from "react";
import "../styles/LandingPage.css";

const GOOGLE_AUTH_URL = `${import.meta.env.VITE_API_BASE_URL || ""}/auth/google`;
const GITHUB_AUTH_URL = `${import.meta.env.VITE_API_BASE_URL || ""}/auth/github`;

// [symbol, bgColor, left%, top%, rotation, animDelay, scale]
const BG_CARDS = [
  ["0",  "#e76e55",  4,  8,  -20, 0.0,  1.00],
  ["7",  "#209cee", 88,  5,   15, 0.5,  1.00],
  ["R",  "#92cc41", 78, 80,  -10, 1.0,  0.90],
  ["S",  "#f7d51d",  6, 75,   18, 1.5,  1.00],
  ["+2", "#e76e55", 50,  3,   -8, 0.8,  0.85],
  ["W",  "#212529", 92, 45,   22, 0.3,  0.90],
  ["3",  "#209cee",  2, 45,  -25, 2.0,  0.80],
  ["+4", "#e76e55", 70, 90,   12, 1.2,  0.95],
  ["9",  "#92cc41", 25, 88,  -15, 0.6,  0.85],
  ["1",  "#f7d51d", 58, 78,   20, 1.8,  0.80],
  ["R",  "#209cee", 38,  2,  -12, 2.2,  0.90],
  ["S",  "#e76e55", 15, 20,   30, 0.4,  0.75],
  ["W",  "#92cc41", 82, 22,  -18, 1.6,  0.85],
  ["5",  "#f7d51d", 47, 92,    8, 0.9,  0.80],
];

function LandingPage() {
  return (
    <div className="landing-wrapper">

      {/* ── Floating background cards ── */}
      {BG_CARDS.map(([sym, bg, left, top, rot, delay, scale], i) => (
        <div
          key={i}
          className="bg-card"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            backgroundColor: bg,
            transform: `rotate(${rot}deg) scale(${scale})`,
            animationDelay: `${delay}s`,
          }}
        >
          <span className="bg-card-sym">{sym}</span>
        </div>
      ))}

      {/* ── Donate button ── */}
      <a
        href="https://buymeacoffee.com/mahimdashora"
        target="_blank"
        rel="noopener noreferrer"
        className="donate-btn"
      >
        <span className="donate-icon">☕</span>
        Buy me a coffee
      </a>

      {/* ── Main card ── */}
      <div className="landing-container nes-container with-title is-centered">
        <p className="title">UNO Multiplayer</p>

        <div className="pixel-logo">
          <span className="card-u">U</span>
          <span className="card-n">N</span>
          <span className="card-o">O</span>
        </div>

        <p className="landing-tagline">Play the classic card game online!</p>

        <div className="auth-section">
          <p className="auth-label">Sign in to play</p>

          <a href={GOOGLE_AUTH_URL} className="auth-btn google-btn">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt=""
              className="btn-logo"
            />
            Sign in with Google
          </a>

          <a href={GITHUB_AUTH_URL} className="auth-btn github-btn">
            <svg className="btn-logo" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Sign in with GitHub
          </a>
        </div>

        <p className="landing-footer">
          <i className="nes-icon coin is-small"></i>
          &nbsp;No account needed · Just pick a provider
        </p>
      </div>

    </div>
  );
}

export default LandingPage;

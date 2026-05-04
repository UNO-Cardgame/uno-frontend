import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

/**
 * OAuth callback handler.
 * The backend redirects here after a successful OAuth flow with a short-lived
 * token: /auth/callback?token=<jwt>
 * We store it in localStorage and forward the user to /home.
 */
function AuthCallback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");
    const error = params.get("error");

    if (error) {
      navigate("/?error=" + encodeURIComponent(error));
      return;
    }

    if (token) {
      localStorage.setItem("uno_token", token);
    }

    navigate("/home");
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="nes-container is-centered" style={{ maxWidth: 320 }}>
        <p style={{ fontFamily: "'Press Start 2P'", fontSize: "0.6rem" }}>
          Signing you in…
        </p>
        <progress className="nes-progress is-primary" value="70" max="100"></progress>
      </div>
    </div>
  );
}

export default AuthCallback;

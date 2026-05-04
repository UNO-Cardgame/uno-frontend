import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connectWebSocket } from "../context/WebsocketStore"; // Import WebSocket function
import "../styles/RoomForm.css";
const wsBaseUrl = import.meta.env.VITE_WS_BASE_URL;

const RoomForm = ({ title, endpoint, playerName, setPlayerName, numPlayers, setNumPlayers, roomId, setRoomId }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    params.append("player_name", playerName);
    if (endpoint === "join" && roomId) {
      params.append("room_id", roomId);
    }
    if (endpoint === "create" && numPlayers) {
      params.append("max_players", numPlayers);
    }
    // Pass JWT as query param — browsers can't set headers on WebSocket upgrades.
    const token = localStorage.getItem("uno_token");
    if (token) params.append("token", token);

    const websocketUrl = `${wsBaseUrl}/${endpoint}?${params.toString()}`;
    console.log("Connecting to WebSocket:", websocketUrl);

    // Connect to WebSocket
    connectWebSocket(websocketUrl);

    // Navigate to Game page with WebSocket URL
    navigate("/game", { state: { websocketUrl } });
  };

  return (
    <div className="container">
      <div className="nes-container with-title">
        <form onSubmit={handleSubmit}>
          <p className="title">{title}</p>
          <div className="nes-field">
            <label htmlFor="playerName">Player Name:</label>
            <input
              type="text"
              id="playerName"
              className="nes-input"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
            />
          </div>
          {endpoint === "join" && (
            <div className="nes-field">
              <label htmlFor="roomId">Room Code:</label>
              <input
                type="text"
                id="roomId"
                className="nes-input"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                required
              />
            </div>
          )}
          {endpoint === "create" && (
            <div className="nes-field">
              <label htmlFor="numPlayers">Number of Players:</label>
              <input
                type="number"
                id="numPlayers"
                className="nes-input"
                value={numPlayers}
                onChange={(e) => setNumPlayers(Number(e.target.value))}
                required
              />
            </div>
          )}
          <button type="submit" className="nes-btn is-primary">
            {title}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomForm;

RoomForm.propTypes = {
  title: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  setPlayerName: PropTypes.func.isRequired,
  numPlayers: PropTypes.number,
  setNumPlayers: PropTypes.func,
  roomId: PropTypes.string,
  setRoomId: PropTypes.func,
};

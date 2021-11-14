import React from "react";
import "../assets/styles/components/Player.scss";
import { useNavigate, useParams } from "react-router-dom";

const Player = (props) => {
  const id = useParams();
  const navegate = useNavigate();
  return (
    <div className="Player">
      <video controls autoPlay>
        <source type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => navegate("/")}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;

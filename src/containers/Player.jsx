import React, { useEffect } from "react";
import "../assets/styles/components/Player.scss";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setPlaying } from "../actions";
import NotFound from "./NotFound";

const Player = (props) => {
  const id = useParams();
  useEffect(() => {
    props.setPlaying(Number(id.id));
  }, []);

  const navegate = useNavigate();

  const hasPlaying = Object.keys(props.playing).length > 0;
  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => navegate("/")}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  setPlaying,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

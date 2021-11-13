import React from "react";
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import deleteIcon from "../assets/static/iconDelete.png";
import { setFavorites, deleteFavorite } from "../actions/index";
import { connect } from "react-redux";

const CarouselItem = ({
  id,
  cover,
  title,
  year,
  contentRating,
  duration,
  setFavorites,
  deleteFavorite,
  isList,
}) => {
  const handleAddList = () => {
    setFavorites({ id, cover, title, year, contentRating, duration });
  };
  const handleDeleteFav = (id) => {
    deleteFavorite({ id, cover, title, year, contentRating, duration });
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          {!isList ? (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleAddList}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={deleteIcon}
              alt="Delete button"
              onClick={() => {
                handleDeleteFav(id);
              }}
            />
          )}
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorites,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

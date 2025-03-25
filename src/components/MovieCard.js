import React from "react";
import { useState, useEffect } from "react";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = " ";
  };
  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    }
    if (rating >= 5 && rating <= 8) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };
  const getGenreClass = (genre) => {
    if (genre === "horror") return "genre-horror";
    if (genre === "action") return "genre-action";
    if (genre === "fantasy") return "genre-fantasy";
    if (genre === "drama") return "genre-drama";
  };
  return (
    <div>
      <div key={movie.id} className="movie-card">
        <img
          src={`/images/${movie.image}`}
          alt="movies.title"
          onError={handleError}
        ></img>
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <div>
            <span className={`movie-card-genre ${getGenreClass(movie.genre)}`}>
              {movie.genre}
            </span>
            <span
              className={`movie-card-rating ${getRatingClass(movie.rating)}`}
            >
              {movie.rating}
            </span>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={isWatchlisted}
              onChange={() => toggleWatchlist(movie.id)}
            ></input>
            <span className="slider">
              <span className="slider-label">
                {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

import { useContext, useEffect, useRef, useState } from "react";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Watchlist from "./Watchlist";
import { WatchListContext } from "../context/WatchlistContext";

const TVShowTile = ({ prop }) => {
  // console.log(prop);
  const WatchlistData = useContext(WatchListContext);
  const { watchlist, setWatchlist } = WatchlistData;

  const isMovieAdded = watchlist.find(
    (watchlistMovie) => watchlistMovie.id === prop.id
  );

  const WatchlistToggle = (e) => {
    let updatedList;
    if (watchlist.includes(prop)) {
      e.target.classList.remove("added");
      updatedList = watchlist.filter((movie) => movie.id !== prop.id);
      setWatchlist(updatedList);
      return updatedList;
    }
    setWatchlist((prevWatchlist) => {
      e.target.classList.add("added");
      updatedList = [...prevWatchlist, prop];
      return updatedList;
    });
  };

  // const isMovieAdded = wat;

  return (
    <>
      {
        <div className="cards">
          <img
            className="cards-image"
            src={`https://image.tmdb.org/t/p/original${prop.poster_path}`}
          />
          <button
            className={`watchlist-btn ${isMovieAdded ? "added" : ""}`}
            data-id={prop.id}
            onClick={WatchlistToggle}
          >
            {isMovieAdded ? (
              <FaMinus style={{ pointerEvents: "none" }} />
            ) : (
              <FaPlus style={{ pointerEvents: "none" }} />
            )}
          </button>
          <Link
            to={`/show-detail/${prop.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="cards-overlay">
              <div className="card-title">{prop.title}</div>
              <div className="card-runtime">
                {prop.release_date}
                <span className="card-rating">
                  {prop.vote_average}
                  <FaStar style={{ color: "gold" }} />
                </span>
              </div>
              <div className="card-overview">
                {prop.overview.slice(0, 118) + "..."}
              </div>
            </div>
          </Link>
        </div>
      }
    </>
  );
};

export default TVShowTile;

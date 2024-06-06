import { useContext, useEffect, useState } from "react";
import { WatchListContext } from "../context/WatchlistContext";
import MovieTile from "./MovieTile";

let genreids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const Watchlist = () => {
  const WatchlistData = useContext(WatchListContext);
  const { watchlist, setWatchlist } = WatchlistData;
  const [genres, setGenres] = useState([]);
  // Isko set krna h bhai saab
  // const [inWatchlist, setInWatchlist] = useState([]); //context wale state variable se isme save krr rhe to use for this component
  const [filteredWatchlist, setfilteredWatchlist] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  useEffect(() => {
    const genresData = watchlist.map((data) => data.genre_ids[0]);
    setGenres(Array.from(new Set(genresData)));
    console.log(genres);
    // setInWatchlist(watchlist);
  }, [watchlist]);

  useEffect(() => {
    setfilteredWatchlist(() => {
      return watchlist.filter(
        (movie) => !selectedGenre || movie.genre_ids[0] == selectedGenre
      );
    });
  }, [selectedGenre, watchlist]);

  const handleGenreSelection = (e) => {
    setSelectedGenre(e.target.dataset.id);
  };

  const handleSearch = (e) => {
    const text = e.target.value;
    setfilteredWatchlist(() => {
      return watchlist.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
    });
  };

  return (
    <>
      <h1
        className="heading"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Watchlist
      </h1>

      {watchlist.length != 0 ? (
        <div className="watchlist-wrapper">
          <div className="left-section">
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              Filters
            </h2>
            <div
              className="watchlist-search"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <input
                type="text"
                placeholder="Searh Watchlist"
                onChange={handleSearch}
              />
            </div>
            <div className="genre-list">
              <div
                className={`genre ${selectedGenre === "" ? "selected" : ""}`}
                data-id=""
                onClick={handleGenreSelection}
              >
                All Genre
              </div>
              {genres.map((genreID) => (
                <div
                  className={`genre ${
                    selectedGenre === genreID ? "selected" : ""
                  }`}
                  data-id={genreID}
                  onClick={handleGenreSelection}
                >
                  {genreids[genreID]}
                </div>
              ))}
            </div>
          </div>
          <div className="right-section">
            <div className="active-watchlist">
              {filteredWatchlist.map((movie) => (
                <MovieTile prop={movie} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-watchlist">
          <div className="empty-image">
            <img src="https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="empty-msg">Seems like your watchlist is empty!!!</div>
        </div>
      )}
    </>
  );
};

export default Watchlist;

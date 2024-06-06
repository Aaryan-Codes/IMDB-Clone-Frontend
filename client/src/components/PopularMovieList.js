import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import MovieTile from "./MovieTile";

const PopularMovieList = () => {
  const [movieList, setMovieList] = useState([]);

  const fetchMovies = (pageNo) => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=0b350f5e45fb6aafe713b2af67a113d2&page=${pageNo}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return (
    <>
      <h1
        className="heading"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        Popular Movies{" "}
      </h1>
      <div className="movie-list">
        {movieList.map((movie) => (
          <MovieTile prop={movie} />
        ))}
      </div>
    </>
  );
};

export default PopularMovieList;

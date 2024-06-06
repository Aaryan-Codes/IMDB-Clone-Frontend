import { useEffect, useState } from "react";
import MovieTile from "./MovieTile";

const UpcomingMovieList = () => {
  const [movieList, setMovieList] = useState([]);

  const fetchMovies = (pageNo) => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=0b350f5e45fb6aafe713b2af67a113d2&page=${pageNo}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results || []));
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
        In Theaters Now{" "}
      </h1>
      <br className="break" />
      <div className="movie-list">
        {movieList.map((movie) => (
          <MovieTile prop={movie} />
        ))}
      </div>
    </>
  );
};

export default UpcomingMovieList;

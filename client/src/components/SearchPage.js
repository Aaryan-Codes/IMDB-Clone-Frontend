import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import MovieTile from "./MovieTile";

const SearchPage = () => {
  const searchResultData = useContext(SearchContext);
  const { searchResult } = searchResultData;
  const [SearchMovies, setSearchMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjM1MGY1ZTQ1ZmI2YWFmZTcxM2IyYWY2N2ExMTNkMiIsInN1YiI6IjY1ZGY5Nzk0N2YyZDRhMDE4NjY3YzljNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lsx9SQW63R9uFuTXKxnV5TlkVOvdFSVSq3lE2u8zIR0",
    },
  };

  function SearchMovie(moviename) {
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${moviename}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setSearchMovies(response.results))
        .catch((err) => console.error(err));
    }, 3000);
  }

  useEffect(() => {
    SearchMovie(searchResult);
  }, [searchResult]);

  return (
    <>
      <h1
        className="heading"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Showing Results For : {searchResult}
      </h1>
      <div className="search-results">
        {SearchMovies.map((movie) => (
          <MovieTile prop={movie} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;

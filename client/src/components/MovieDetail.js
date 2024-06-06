import { useEffect, useState } from "react";
import { FaArrowAltCircleUp, FaLink, FaSquare, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

import SimilarSuggestions from "./SimilarSuggestions";

const MovieDetail = () => {
  const [movieDet, setMovieDet] = useState({});
  const params = useParams(); // holds movieId for dynamic API call

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=0b350f5e45fb6aafe713b2af67a113d2`
    )
      .then((res) => res.json())
      .then((data) => setMovieDet(data));
  }, []);

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            movieDet ? movieDet.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                movieDet ? movieDet.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {movieDet ? movieDet.original_title : ""}
            </div>
            <div className="movie__tagline">
              {movieDet ? movieDet.tagline : ""}
            </div>
            <div className="movie__rating">
              <FaStar style={{ color: "gold" }} />
              {movieDet ? movieDet.vote_average : ""}
              <span className="movie__voteCount">
                {movieDet ? "(" + movieDet.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {movieDet ? movieDet.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {movieDet ? "Release date: " + movieDet.release_date : ""}
            </div>
            <div className="movie__genres">
              {movieDet && movieDet.genres
                ? movieDet.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Overview</div>
            <div className="overview">{movieDet ? movieDet.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {movieDet && movieDet.homepage && (
          <a
            href={movieDet.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <FaLink />
              </span>
            </p>
          </a>
        )}
        {movieDet && movieDet.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + movieDet.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb
                <FaLink />
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="movie__heading">Production companies</div>
      <div className="movie__production">
        {movieDet &&
          movieDet.production_companies &&
          movieDet.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
      {/* <SimilarSuggestions prop={movieDet} /> */}
    </div>
  );
};

export default MovieDetail;

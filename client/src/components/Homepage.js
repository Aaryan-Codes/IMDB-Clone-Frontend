import PopularList from "./PopularMovie";
import TopRated from "./TopRatedMovie";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import NowPlayingMovie from "./NowPlaying";
import Celebs from "./Celebs";
import { WatchListContext } from "../context/WatchlistContext";
import BackToTopButton from "./BackToTopButton";

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const watchlistData = useContext(WatchListContext);
  const { watchlist } = watchlistData;

  const fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=0b350f5e45fb6aafe713b2af67a113d2&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return (
    <>
      <div className="carousel">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
        >
          {movieList.map((movie) => (
            <Link
              to={`/movie-detail/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="backdrop-image">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
              </div>
              <div className="backdrop-overlay">
                <h2>{movie.title}</h2>
                <div className="info">
                  <span>{movie.release_date}</span>
                  <span className="rating">
                    <FaStar style={{ color: "gold" }} />
                    {movie.vote_average}
                  </span>
                </div>
                <div className="backdrop-overview">{movie.overview}</div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <NowPlayingMovie />
      <TopRated />
      <PopularList />
      <Celebs />
    </>
  );
};

export default HomePage;

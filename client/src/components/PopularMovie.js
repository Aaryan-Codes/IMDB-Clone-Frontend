import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlus } from "react-icons/fa";
import MovieTile from "./MovieTile";
import { Link } from "react-router-dom";

const PopularList = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchPopularmovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=0b350f5e45fb6aafe713b2af67a113d2`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results || []));
  };

  var settings = {
    dots: false,
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          slidesToShow: 3,
          infinite: true,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: "center",
          slidesToShow: 2,
          initialSlide: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          slidesToShow: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  useEffect(() => {
    fetchPopularmovies();
  }, []);

  //   console.log(popularMovies);

  return (
    <div className="popular-movies">
      <Link className="heading" to="/popular-movies">
        Popular Movies
      </Link>
      <div className="movie-wrapper">
        <Slider {...settings}>
          {popularMovies.map((movie) => (
            <MovieTile prop={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularList;

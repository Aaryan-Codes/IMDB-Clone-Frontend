import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlus } from "react-icons/fa";
import MovieTile from "./MovieTile";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [topRatedMovie, setTopRated] = useState([]);

  const fetchTopRated = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=0b350f5e45fb6aafe713b2af67a113d2`
    )
      .then((res) => res.json())
      .then((data) => setTopRated(data.results || []));
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
    fetchTopRated();
  }, []);

  //   console.log(popularMovies);

  return (
    <div className="popular-movies">
      <Link to="/top-rated" className="heading">
        {" "}
        Top Rated Movies{" "}
      </Link>
      <div className="movie-wrapper">
        <Slider {...settings}>
          {topRatedMovie.map((movie) => (
            <MovieTile prop={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRated;

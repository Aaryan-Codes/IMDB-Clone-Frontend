import { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieTile from "./MovieTile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarSuggestions = ({ prop }) => {
  const [similar, setSimilar] = useState([]);

  const fetchSimilarmovies = (movieID) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjM1MGY1ZTQ1ZmI2YWFmZTcxM2IyYWY2N2ExMTNkMiIsInN1YiI6IjY1ZGY5Nzk0N2YyZDRhMDE4NjY3YzljNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lsx9SQW63R9uFuTXKxnV5TlkVOvdFSVSq3lE2u8zIR0",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/similar?page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSimilar(response.results || []))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchSimilarmovies(prop.id);
  }, []);

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

  //   console.log(popularMovies);

  return (
    <div className="popular-movies">
      Similar Movies
      <div className="movie-wrapper">
        <Slider {...settings}>
          {similar.map((movie) => (
            <MovieTile prop={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimilarSuggestions;

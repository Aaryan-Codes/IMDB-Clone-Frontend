import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import OnTheAir from "./OnTheAir";
import TVShowPopular from "./TVShowPopular";
import TVTopRated from "./TVShowTopRated";
import Celebs from "./Celebs";

const TVshows = () => {
  const [tvshows, setTvshows] = useState([]);

  const fetchTVshows = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=0b350f5e45fb6aafe713b2af67a113d2`
    )
      .then((res) => res.json())
      .then((data) => setTvshows(data.results));
  };

  useEffect(() => {
    fetchTVshows();
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
          {tvshows.map((show) => (
            <Link
              to={`/show-detail/${show.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="backdrop-image">
                <img
                  src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
                />
              </div>
              <div className="backdrop-overlay">
                <h2>{show.name}</h2>
                <div className="info">
                  <span>{show.first_air_date}</span>
                  <span className="rating">
                    <FaStar style={{ color: "gold" }} />
                    {show.vote_average}
                  </span>
                </div>
                <div className="backdrop-overview">{show.overview}</div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <OnTheAir />
      <TVShowPopular />
      <TVTopRated />
      <Celebs />
    </>
  );
};

export default TVshows;

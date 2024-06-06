import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Celebs = () => {
  const [celeb, setCelebs] = useState([]);

  const fetchCelebs = () => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=0b350f5e45fb6aafe713b2af67a113d2`
    )
      .then((res) => res.json())
      .then((data) => setCelebs(data.results || []));
  };

  var settings = {
    dots: false,
    className: "center",
    infinite: true,
    arrows: false,
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
    fetchCelebs();
  }, []);

  //   console.log(popularMovies);

  return (
    <div>
      <span
        className="heading"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px 0px",
        }}
      >
        Popular Celebs
      </span>
      <div className="celeb-wrapper">
        <Slider {...settings}>
          {celeb.map((person) => (
            <div className="celeb">
              <span>
                <img
                  className="celeb-image"
                  src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                />
              </span>
              <span>{person.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Celebs;

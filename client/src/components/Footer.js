import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <a target="_blank" href="https://www.tiktok.com/@imdb">
          {" "}
          <FaTiktok />{" "}
        </a>
        <a target="_blank" href="https://www.instagram.com/imdb">
          {" "}
          <FaInstagram />{" "}
        </a>
        <a target="_blank" href="https://twitter.com/imdb">
          {" "}
          <FaTwitter />{" "}
        </a>
        <a target="_blank" href="https://www.youtube.com/imdb">
          {" "}
          <FaYoutube />{" "}
        </a>
        <a target="_blank" href="https://www.facebook.com/imdb">
          {" "}
          <FaFacebook />{" "}
        </a>
      </div>
      <div className="extra-Links">
        <a href="https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525?_branch_match_id=1297936271350166000&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL86pTNJLLCjQy8nMy9YP9k6pDDRzNDGxBABVqlN1IAAAAA%3D%3D">
          Get the IMDb app
        </a>
        <a href="https://help.imdb.com/imdb">Help</a>
        <a href="https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so">
          Site Index
        </a>
        <a href="https://pro.imdb.com/in?redirectUrl=http%3A%2F%2Fpro.imdb.com%2F%3Fref_%3Dcons_tf_pro%26rf%3Dcons_tf_pro">
          IMDbPro
        </a>
        <a href="https://www.boxofficemojo.com/">Box Office Mojo</a>
        <a href="https://developer.imdb.com/">IMDb Developer</a>
        <a href="https://www.imdb.com/pressroom/">Press Room</a>
        <a href="https://advertising.amazon.com/resources/ad-specs/imdb/">
          Advertising
        </a>
        <a href="https://www.amazon.jobs/content/en/teams/imdb">Jobs</a>
        <a href="https://www.imdb.com/conditions">Conditions of Use</a>
        <a href="https://www.imdb.com/privacy">Privacy Policy</a>
      </div>
      <div className="github-link">
        <a
          style={{ textDecoration: "none", color: "white", marginLeft: "5px" }}
          target="_blank"
          href="https://github.com/Aaryan-Codes"
        >
          Made By : Aaryan Singh <FaGithub />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;

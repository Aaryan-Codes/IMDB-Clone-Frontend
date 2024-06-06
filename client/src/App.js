import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import UpcomingMovieList from "./components/UpcomingMovieList";
import PopularMovieList from "./components/PopularMovieList";
import Watchlist from "./components/Watchlist";
import HomePage from "./components/Homepage";
import WatchlistProvider from "./context/WatchlistContext";
import SearchProvider from "./context/SearchContext";
import SearchPage from "./components/SearchPage";
import Footer from "./components/Footer";
import TVshows from "./components/TVshowHomePage";
import TVshowDetail from "./components/TVshowDetail";
import BackToTopButton from "./components/BackToTopButton";

const App = () => {
  return (
    <WatchlistProvider>
      <SearchProvider>
        <div className="main">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/upcoming-movies" element={<UpcomingMovieList />} />
              <Route path="/popular-movies" element={<PopularMovieList />} />
              <Route path="/imdb-clone" element={<HomePage />} />
              <Route path="/movie-detail/:movieID" element={<MovieDetail />} />
              <Route path="/show-detail/:showID" element={<TVshowDetail />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/search-results" element={<SearchPage />} />
              <Route path="/tv-shows" element={<TVshows />} />
            </Routes>
            <BackToTopButton />
            <Footer />
          </BrowserRouter>
        </div>
      </SearchProvider>
    </WatchlistProvider>
  );
};

export default App;

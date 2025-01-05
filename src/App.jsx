import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MoviesList />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

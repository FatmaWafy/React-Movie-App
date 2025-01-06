import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";
import RegisterForm from "./pages/RegisterForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<MoviesList />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/RegisterForm' element={<RegisterForm />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      ) : (
        <RegisterForm onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;

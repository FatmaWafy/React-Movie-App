import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterForm from "./pages/RegisterForm";
import { LanguageProvider } from "./context/LanguageContext";
import { Suspense, lazy } from "react";

const Favorites = lazy(() => import("./components/Favorites"));
const MoviesList = lazy(() => import("./pages/MoviesList"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Watchlist = lazy(() => import("./pages/Watchlist"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<MoviesList />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/RegisterForm' element={<RegisterForm />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/form' element={<RegisterForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;

import { useEffect, useState } from "react";
import config from "../apis/config";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [noData, setNoData] = useState(false);
  const moviesPerPage = 8;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await config.get("/movie/popular");
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setNoData(false);
      return;
    }
    try {
      const response = await config.get(`/search/movie?query=${searchQuery}`);
      if (response.data.results.length === 0) {
        setNoData(true);
        setSearchResults([]);
      } else {
        setNoData(false);
        setSearchResults(response.data.results);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const handleReset = () => {
    setSearchQuery("");
    setSearchResults([]);
    setNoData(false);
  };

  const moviesToDisplay = searchResults.length
    ? searchResults
    : movies.slice(
        (currentPage - 1) * moviesPerPage,
        currentPage * moviesPerPage
      );

  const totalPages = searchResults.length
    ? Math.ceil(searchResults.length / moviesPerPage)
    : Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className='container'>
      <h2 className='mt-4'>Popular Movies</h2>

      {/* search */}
      <div className='mb-4'>
        <input
          type='text'
          className='form-control'
          placeholder='Search for movies...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className='mt-2'>
          <button className='btn btn-primary me-2' onClick={handleSearch}>
            Search
          </button>
          {searchQuery.trim() && (
            <button className='btn btn-secondary' onClick={handleReset}>
              Reset
            </button>
          )}
        </div>
      </div>

      {/* no data */}
      {noData && <p className='text-danger'>No Data Found</p>}

      {/* movies */}
      <div className='row'>
        {moviesToDisplay.map((movie) => (
          <div className='col-md-3 mb-4' key={movie.id}>
            <div className='card' style={{ height: "600px" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className='card-img-top'
                alt={movie.title}
              />
              <div className='card-body'>
                <h5 className='card-title' style={{ fontSize: "15px" }}>
                  {movie.title}{" "}
                </h5>
                <p className='card-text' style={{ fontSize: "12px" }}>
                  Release Date: {movie.release_date}
                </p>
                <Link
                  to={`/movie/${movie.id}`}
                  className='btn'
                  style={{
                    padding: "4px 30px",
                    color: "white",
                    fontSize: "15px",
                    backgroundColor: "#ffe353",
                    position: "absolute",
                    bottom: "15px",
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {!searchResults.length && !noData && (
        <div className='pagination'>
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>
              {"<"}
            </button>
          )}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={page === currentPage ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
          {currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>
              {">"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesList;

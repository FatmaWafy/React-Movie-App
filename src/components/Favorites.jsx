import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = (movie) => {
    return favorites.some((fav) => fav.id === movie.id);
  };

  return (
    <div className='container mt-2 mb-2'>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className='row'>
          {favorites.map((movie) => (
            <div className='col-md-3 mb-4' key={movie.id}>
              <div className='card'>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className='card-img-top'
                  alt={movie.title}
                />
                <div
                  className='card-body'
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "60px",
                  }}
                >
                  <h5 className='card-title' style={{ fontSize: "15px" }}>
                    {movie.title}
                  </h5>
                  <button
                    className='btn favorite-icon transation'
                    onClick={() => dispatch(toggleFavorite(movie))}
                  >
                    <i
                      className={
                        isFavorite(movie) ? "fas fa-heart" : "far fa-heart"
                      }
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

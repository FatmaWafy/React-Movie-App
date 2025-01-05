import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../apis/config";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axiosInstance.get(`/movie/${id}`);
      setMovie(response.data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-4'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className='img-fluid rounded'
          />
        </div>
        <div className='col-md-8'>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <ul className='list-group'>
            <li className='list-group-item'>
              Release Date: {movie.release_date}
            </li>
            <li className='list-group-item'>Rating: {movie.vote_average}</li>
            <li className='list-group-item'>Runtime: {movie.runtime} mins</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

import { WatchedMovieProps } from "../../types";
import { StyledWatchedMovie } from "./WatchedMovie.style";

function WatchedMovie({
  movie,
  onDeleteMovieFromWatchList,
}: WatchedMovieProps) {
  const handleDeleteMovie = () => {
    onDeleteMovieFromWatchList(movie.imdbID);
  };
  return (
    <StyledWatchedMovie key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button className='btn-delete' onClick={handleDeleteMovie}>
          X
        </button>
      </div>
    </StyledWatchedMovie>
  );
}

export default WatchedMovie;

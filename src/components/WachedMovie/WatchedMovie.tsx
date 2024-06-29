import { WatchedMovieProps } from "../../types";
import { StyledWatchedMovie } from "./WatchedMovie.style";

function WatchedMovie({ movie }: WatchedMovieProps) {
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
      </div>
    </StyledWatchedMovie>
  );
}

export default WatchedMovie;

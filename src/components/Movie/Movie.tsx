import { MovieProps } from "../../types";
import { StyledMovie } from "./Movie.style";

function Movie({ movie, setSelectedMovieId }: MovieProps) {
  const onSelectMovie = () => {
    setSelectedMovieId(movie.imdbID);
  };
  return (
    <StyledMovie key={movie.imdbID} onClick={onSelectMovie}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </StyledMovie>
  );
}

export default Movie;

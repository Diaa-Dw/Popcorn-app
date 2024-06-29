import { MovieProps } from "../../../types";

function Movie({ movie, setSelectedMovieId }: MovieProps) {
  const onSelectMovie = () => {
    setSelectedMovieId((prevId: string) =>
      prevId === movie.imdbID ? "" : movie.imdbID
    );
  };
  return (
    <li key={movie.imdbID} onClick={onSelectMovie}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;

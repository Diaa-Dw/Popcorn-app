import Movie from "../Movie/Movie";
import { MoviesProps } from "../../types";
import { List } from "./MovieList.style";

function MovieList({
  movies,
  setSelectedMovieId,
  handleBackButton,
}: MoviesProps) {
  return (
    <List>
      <button className='btn-back' onClick={handleBackButton}>
        &larr;
      </button>
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          setSelectedMovieId={setSelectedMovieId}
        />
      ))}
    </List>
  );
}

export default MovieList;

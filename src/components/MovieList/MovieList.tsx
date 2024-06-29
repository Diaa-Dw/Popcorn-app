import Movie from "../Main/Movie/Movie";
import { MoviesProps } from "../../types";
import { List } from "./MovieList.style";

function MovieList({ movies, setSelectedMovieId }: MoviesProps) {
  return (
    <List>
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

import { WachedMoviesProps } from "../../types";
import WatchedMovie from "../WachedMovie/WatchedMovie";

function WatchedList({ watched }: WachedMoviesProps) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedList;

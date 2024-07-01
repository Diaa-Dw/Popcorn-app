import { WatchedListProps } from "../../types";
import WatchedMovie from "../WachedMovie/WatchedMovie";

function WatchedList({
  watched,
  onDeleteMovieFromWatchList,
}: WatchedListProps) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteMovieFromWatchList={onDeleteMovieFromWatchList}
        />
      ))}
    </ul>
  );
}

export default WatchedList;

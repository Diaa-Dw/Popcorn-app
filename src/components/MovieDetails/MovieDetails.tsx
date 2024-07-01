import { useEffect, useState } from "react";
import {
  MovieDetailsProps,
  SelectedMovieProps,
  WatchedProps,
} from "../../types";
import { StyledMovieDetails } from "./MovieDetails.style";
import RatingStars from "../RatingStars/RatingStars";
import Spinner from "../Spinner/Spinner";
import { useFetchMovie } from "../../hooks/useFetchMoive";

function MovieDetails({
  selectedMovieId,
  onCloseMovie,
  setWatched,
}: MovieDetailsProps) {
  const [userRating, setUserRating] = useState<number | null>(null);

  const { movie, isLoading } = useFetchMovie(selectedMovieId);

  //* distract movie object *//
  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    Year: year,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie as SelectedMovieProps;

  //* handle change page title to selected movie *//
  useEffect(() => {
    if (!title) return;
    document.title = title;

    return () => {
      document.title = "POPCORN";
    };
  }, [title]);

  //*Handle adding  a movie to watched list*//
  const handleAddingMovieToWatchedList = () => {
    const duarion = runtime?.split(" ")[0];

    const newMoive = {
      imdbID: selectedMovieId as string,
      Title: title as string,
      Year: year as string,
      Poster: poster as string,
      runtime: Number(duarion) as number,
      imdbRating: Number(imdbRating),
      userRating: userRating as number,
    };

    setWatched((prevMovies: WatchedProps[] | []) => {
      const existingMovieIndex = prevMovies.findIndex(
        (movie) => movie.imdbID === selectedMovieId
      );

      if (existingMovieIndex !== -1) {
        const existingMovie = {
          ...prevMovies[existingMovieIndex],
          userRating: userRating as number,
        };

        prevMovies[existingMovieIndex] = existingMovie;
        return [...prevMovies];
      } else {
        return [...prevMovies, newMoive];
      }
    });

    onCloseMovie();
  };

  return (
    <StyledMovieDetails>
      <button className='btn-back' onClick={onCloseMovie}>
        &larr;
      </button>
      {isLoading || !title ? (
        <Spinner />
      ) : (
        <>
          <header>
            <img src={poster} alt={`Poster of ${title} movie.`} />

            <div className='details-overview'>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating} IMDB rating
              </p>
            </div>
          </header>

          <section>
            <div className='rating'>
              <RatingStars maxRating={10} onSetRating={setUserRating} />
              {userRating && (
                <button
                  className='btn-add'
                  onClick={handleAddingMovieToWatchedList}
                >
                  Add to list
                </button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </StyledMovieDetails>
  );
}

export default MovieDetails;

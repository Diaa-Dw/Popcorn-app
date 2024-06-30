import { useEffect, useState } from "react";
import { MovieDetailsProps, SelectedMovieProps } from "../../types";
import { StyledMovieDetails } from "./MovieDetails.style";
import RatingStars from "../RatingStars/RatingStars";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import { useFetchMovie } from "../../hooks/useFetchMoive";

function MovieDetails({ selectedMovieId, onCloseMovie }: MovieDetailsProps) {
  const [userRating, setUserRating] = useState<number | null>(null);

  const { movie, isLoading, error } = useFetchMovie(selectedMovieId);

  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie as SelectedMovieProps;

  useEffect(() => {
    if (!title) return;
    document.title = title;

    return () => {
      document.title = "POPCORN";
    };
  }, [title]);

  return (
    <StyledMovieDetails>
      <button className='btn-back' onClick={onCloseMovie}>
        &larr;
      </button>
      {error ? (
        <Error errorContext={error} />
      ) : isLoading ? (
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
              {userRating && <button className='btn-add'>Add to list</button>}
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

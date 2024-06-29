import { useEffect, useState } from "react";
import { MovieDetailsProps } from "../../types";
import { StyledMovieDetails } from "./MovieDetails.style";
import RatingStars from "../RatingStars/RatingStars";

const OMDP_API = import.meta.env.VITE_OMDB_API;

type MovieProps = {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
  imdbRating: string;
};

function MovieDetails({ selectedMovieId, onCloseMovie }: MovieDetailsProps) {
  const [movie, setMovie] = useState([]);
  const [userRating, setUserRating] = useState(null);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie as MovieProps;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchMovie = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${OMDP_API}&i=${selectedMovieId}`,
        { signal }
      );

      const data = await response.json();
      console.log("🚀 ~ fetchMovie ~ data:", data);

      setMovie(data);
    };
    fetchMovie();
  }, [selectedMovieId]);

  return (
    <StyledMovieDetails>
      <header>
        <button className='btn-back' onClick={onCloseMovie}>
          &larr;
        </button>
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
    </StyledMovieDetails>
  );
}

export default MovieDetails;

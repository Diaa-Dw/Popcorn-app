import { useEffect, useState } from "react";
import { SelectedMovieProps, useFetchMovieProps } from "../types";

const OMDP_API = import.meta.env.VITE_OMDB_API;

export const useFetchMovie = (selectedMovieId: string): useFetchMovieProps => {
  const [movie, setMovie] = useState<SelectedMovieProps | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // const timeoutId = setTimeout(() => {
        //   controller.abort();
        //   setError("Fetch request timed out");
        // }, 10000); // Set your timeout duration (e.g., 5000ms = 5s)

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${OMDP_API}&i=${selectedMovieId}`,
          { signal }
        );

        // clearTimeout(timeoutId);

        if (!response.ok) {
          throw new TypeError(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setMovie(data);
      } catch (error) {
        const err = error as Error;
        if (err?.name == "AbortError") return;

        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();

    return () => {
      controller.abort(fetchMovie);
    };
  }, [selectedMovieId]);

  return { movie, isLoading, error };
};

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UseFetchProps } from "../types";

const OMDP_API = import.meta.env.VITE_OMDB_API;

export const useFetch = (
  query: string,
  setZIndex: Dispatch<SetStateAction<number>>
): UseFetchProps => {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async () => {
      if (query.length <= 2) return;
      try {
        setZIndex(1);
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${OMDP_API}&s=${query}`,
          { signal }
        );

        const data = await response.json();

        if (!data.Response) {
          throw new Error("Somthing went wrong while fetching data");
        }

        setMovies(data.Search);

        console.log(data);
      } catch (error) {
        const err = error as Error;
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
        setError("");
      }
    };
    fetchData();

    return () => {
      controller.abort(fetchData);
    };
  }, [query]);

  return [movies, isLoading, error];
};

import { Dispatch, SetStateAction } from "react";

export type movieProps = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type WachedMovieProps = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
};

export type WachedMoviesProps = {
  watched: WachedMovieProps[] | [];
};

export type WatchedMovieProps = {
  movie: WachedMovieProps;
};

export type MoviesProps = {
  movies: movieProps[] | [];
  setSelectedMovieId: Dispatch<SetStateAction<string>>;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export type ErrorProps = {
  errorContext: string;
};

export type LogoProps = {
  theme: string;
};

export type SearchProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

export type ToggleThemeProps = {
  setTheme: Dispatch<SetStateAction<string>>;
};

export type MovieProps = {
  movie: movieProps;
  setSelectedMovieId: Dispatch<SetStateAction<string>>;
};

export type UseFetchProps = [
  movies: movieProps[],
  isLoading: boolean,
  error: string | null
];

export type RatingStarsProps = {
  maxRating: number;
  onSetRating: Dispatch<SetStateAction<number | null>>;
  color: string;
  defaultRating: number;
  size: number;
};

export type StarProps = {
  onHoverIn: () => void;
  onHoverOut: () => void;
  full: boolean;
  color: string;
  onRating: () => void;
  size: number;
};

export type MovieDetailsProps = {
  selectedMovieId: string;
  onCloseMovie: () => void;
};

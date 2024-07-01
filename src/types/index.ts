import { Dispatch, SetStateAction } from "react";

export type movieProps = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export interface WatchedProps {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  userRating: number;
  imdbRating: number;
}

export type SelectedMovieProps = {
  Title?: string;
  Year?: string;
  Poster?: string;
  Runtime?: string;
  Plot?: string;
  Released?: string;
  Actors?: string;
  Director?: string;
  Genre?: string;
  imdbRating?: string;
};

export type WachedMoviesProps = {
  watched: WatchedProps[] | [];
};

export type WatchedListProps = {
  watched: WatchedProps[] | [];
  onDeleteMovieFromWatchList: (imdb: string) => void;
};
export type WatchedMovieProps = {
  movie: WatchedProps;
  onDeleteMovieFromWatchList: (imdb: string) => void;
};

export type MoviesProps = {
  movies: movieProps[] | [];
  setSelectedMovieId: (id: string) => void;
  handleBackButton: () => void;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

type styles = {
  zIndex: number;
};

export type BoxProps = {
  children: React.ReactNode;
  styles?: styles;
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
  color?: string;
  defaultRating?: number;
  size?: number;
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
  setWatched: Dispatch<SetStateAction<WatchedProps[] | []>>;
};

export type useRatingProps = {
  userRating: Dispatch<SetStateAction<null | number>>;
};

export type useFetchMovieProps = {
  movie: SelectedMovieProps;
  isLoading: boolean;
  error: string | null;
};

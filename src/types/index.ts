export type movieProps = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type HeaderProps = {
  movies: movieProps[];
};

export type BoxProps = {
  children: React.ReactNode;
};

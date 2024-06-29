import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { GlobalStyles } from "./style/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import Box from "./components/Box/Box";
import MovieList from "./components/MovieList/MovieList";
import Summary from "./components/Summary/Summary";
import WatchedList from "./components/WatchedList";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import ToggleTheme from "./components/ToggleThem/ToggleTheme";
import Spinner from "./components/Spinner/Spinner";
import Error from "./components/Error/Error";
import { useFetch } from "./hooks/useFetch";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

export default function App() {
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("dark");
  const [selectedMovieId, setSelectedMovieId] = useState("tt2582846");
  console.log("🚀 ~ App ~ selectedMovieId:", selectedMovieId);

  const [movies, isLoading, error] = useFetch(query);
  // console.log("🚀 ~ App ~ movies:", movies);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Header>
          <Logo theme={theme} />
          <Search query={query} setQuery={setQuery} />
          <ToggleTheme setTheme={setTheme} />
        </Header>
        <Main>
          <Box>
            {error ? (
              <Error errorContext={error} />
            ) : isLoading ? (
              <Spinner />
            ) : (
              <MovieList
                movies={movies}
                setSelectedMovieId={setSelectedMovieId}
              />
            )}
          </Box>

          <Box>
            <Summary watched={watched} />
            <WatchedList watched={watched} />
          </Box>
        </Main>
      </div>
    </ThemeProvider>
  );
}

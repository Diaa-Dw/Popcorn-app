import { useEffect, useState } from "react";

export const useLocalStorage = (initialState: [], key: string) => {
  const [value, setValue] = useState(() => {
    const savedData = localStorage.getItem(key);
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    //*save watchedMovies to local storage
    const handleBeforeUnload = () => {
      localStorage.setItem(key, JSON.stringify(value));
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [value]);

  return [value, setValue];
};

import { StyledSearch } from "./Search.style";
import { SearchProps } from "../../types";
import { useEffect, useRef } from "react";

function Search({ query, setQuery }: SearchProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if the reference is not null
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []); // Empty dependency array to run only once after the initial render

  return (
    <StyledSearch
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={searchRef}
    />
  );
}

export default Search;

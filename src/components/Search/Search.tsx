import { useState } from "react";
import { StyledSearch } from "./Search.style";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <StyledSearch
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;

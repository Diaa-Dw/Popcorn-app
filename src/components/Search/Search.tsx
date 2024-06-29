import { StyledSearch } from "./Search.style";
import { SearchProps } from "../../types";

function Search({ query, setQuery }: SearchProps) {
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

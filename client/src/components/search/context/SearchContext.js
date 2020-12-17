import { createContext } from "react";

const SearchContext = createContext({
  fetchProducts: () => {},
  toggleDropdownVisibility: () => {},
});

export default SearchContext;

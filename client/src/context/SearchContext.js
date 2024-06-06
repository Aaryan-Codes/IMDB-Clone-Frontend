import { createContext, useState } from "react";

export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState("");
  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

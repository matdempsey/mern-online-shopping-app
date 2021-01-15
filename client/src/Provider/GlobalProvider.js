import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  // this initial state is required in the event user refreshes
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("_sid") !== null
  );
  //TODO: basketItemCount

  return (
    <GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

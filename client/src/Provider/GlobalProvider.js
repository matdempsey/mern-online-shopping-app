import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //TODO: basketItemCount

  return (
    <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

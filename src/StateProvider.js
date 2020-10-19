import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer\\

export const StateContext = createContext();

//Wrap the app so every component can have access to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pul info from the data layer
export const useStateValue = () => useContext(StateContext);

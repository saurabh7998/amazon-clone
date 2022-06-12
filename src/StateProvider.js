import React, {createContext, useReducer, useContext} from "react";

//Data Layer:
export const StateContext = createContext();

//Provider:
export const StateProvider = ({initialState, reducer, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider> 
    );
};

//This is how we use it inside any component:
export const useStateValue = () => useContext(StateContext);
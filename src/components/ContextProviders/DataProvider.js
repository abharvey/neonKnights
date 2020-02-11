import React, { createContext, useReducer } from "react";
import defaultStore from "data/defaultStore";

const store = createContext(defaultStore);

const { Provider } = store;

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        const newState = { ...state };
        switch (action.type) {
            default:
                return newState;
        }
    }, defaultStore);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store };
export default DataProvider;

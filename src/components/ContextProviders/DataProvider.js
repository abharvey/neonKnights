import React, { useReducer } from "react";

import { Provider } from "data/store";
import defaultState from "data/defaultState";
import { appReducer } from "data/reducers";

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, defaultState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default DataProvider;

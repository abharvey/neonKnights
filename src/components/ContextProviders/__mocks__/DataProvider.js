import React from "react";

import { Provider } from "data/store";

const DataProvider = ({ state = {}, dispatch = jest.fn(), children }) => (
    <Provider value={{ state, dispatch }}>{children}</Provider>
);

export default DataProvider;

import React from "react";

import ThemeProvider from "./ThemeProvider";
import DataProvider from "./DataProvider";
import Router from "./Router";

export const ContextProviders = ({ children }) => (
    <DataProvider>
        <ThemeProvider>
            <Router>{children}</Router>
        </ThemeProvider>
    </DataProvider>
);

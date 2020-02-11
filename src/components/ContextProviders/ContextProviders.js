import React from "react";

import ThemeProvider from "./ThemeProvider";
import DataProvider from "./DataProvider";

export const ContextProviders = ({ children }) => (
    <DataProvider>
        <ThemeProvider>{children}</ThemeProvider>
    </DataProvider>
);

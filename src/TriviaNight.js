import React from "react";
import { ContextProviders, CleanStyles } from "components";

import TriviaRoutes from "./TriviaRoutes";

function TriviaNight() {
    return (
        <ContextProviders>
            <CleanStyles />
            <TriviaRoutes />
        </ContextProviders>
    );
}

export default TriviaNight;

import React from "react";
import { ContextProviders, CleanStyles } from "components";

import { Home } from "screens";

function TriviaNight() {
    return (
        <ContextProviders>
            <CleanStyles />
            <Home />
        </ContextProviders>
    );
}

export default TriviaNight;

import React from "react";
import { ContextProviders, CleanStyles } from "components";

import { Switch, Route, Redirect } from "react-router-dom";

import { Home, Quiz, Results } from "screens";

function TriviaNight() {
    return (
        <ContextProviders>
            <CleanStyles />
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/quiz">
                    <Quiz />
                </Route>
                <Route path="/results">
                    <Results />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </ContextProviders>
    );
}

export default TriviaNight;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home, Quiz, Results } from "screens";

const TriviaRoutes = () => (
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
);

export default TriviaRoutes;

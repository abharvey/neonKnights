import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { store } from "data/store";

import { Header, ContentPanel, FooterNavigation } from "components";

const Home = () => {
    const { dispatch } = useContext(store);
    useEffect(() => {
        dispatch({ type: "QUESTIONS/CLEAR_ANSWERS" });
    }, [dispatch]);

    return (
        <>
            <Header>
                <h1>Welcome to the Trivia Challenge</h1>
            </Header>
            <ContentPanel>
                <h2>You will be presented with 10 True or False Questions.</h2>
                <h2>Can you score 100%</h2>
            </ContentPanel>
            <FooterNavigation>
                <Link to="/quiz">Begin</Link>
            </FooterNavigation>
        </>
    );
};

export default Home;

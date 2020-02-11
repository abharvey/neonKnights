import React from "react";
import { Link } from "react-router-dom";

import { Header, ContentPanel, FooterNavigation } from "components";

const Home = () => (
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

export default Home;

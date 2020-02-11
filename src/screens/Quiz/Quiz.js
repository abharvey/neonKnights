import React from "react";

import { useLoadQuestions } from "data/api";

import { Header, ContentPanel, FooterNavigation } from "components";

const Quiz = () => {
    useLoadQuestions();

    return (
        <>
            <Header>Welcome to the Trivia Challenge</Header>
            <ContentPanel>Can you score 100%</ContentPanel>
            <FooterNavigation>Begin</FooterNavigation>
        </>
    );
};

export default Quiz;

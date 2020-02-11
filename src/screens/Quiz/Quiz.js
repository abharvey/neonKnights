import React, { useEffect, useState } from "react";

import { loadQuestions } from "data/api";

import { Header, ContentPanel, FooterNavigation, Loading } from "components";

const Quiz = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async function() {
            const questionData = await loadQuestions();

            setLoading(false);
        })();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Header>Welcome to the Trivia Challenge</Header>
            <ContentPanel>Can you score 100%</ContentPanel>
            <FooterNavigation>Begin</FooterNavigation>
        </>
    );
};

export default Quiz;

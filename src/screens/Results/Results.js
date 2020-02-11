import React from "react";
import { Link } from "react-router-dom";

import { useResults } from "data/selectors";

import { Header, ContentPanel, FooterNavigation } from "components";
import Result from "./components/Result";

const answerAsResult = (answer, i) => (
    <Result answer={answer} key={`${i}-${answer.isRightAnswer}`} />
);

const Results = () => {
    const results = useResults();

    const numCorrect = results.filter(answer => answer.isRightAnswer).length;

    return (
        <>
            <Header>
                {numCorrect} / {results.length}
            </Header>
            <ContentPanel>{results.map(answerAsResult)}</ContentPanel>
            <FooterNavigation>
                <Link to="/">Play Again?</Link>
            </FooterNavigation>
        </>
    );
};

export default Results;

import React from "react";
import styled, { css } from "styled-components";

import { useResults } from "data/selectors";

import {
    Header,
    ContentPanel,
    FooterNavigation,
    MEDIUM,
    SMALL,
    Polygon,
    StyledLink
} from "components";
import { centeredFlexColumn } from "components/cssUtils";
import Result from "./components/Result";

const Score = styled.div`
    position: relative;
    left: -10%;
    ${centeredFlexColumn};
    ${({ theme: { font, sizing } }) => css`
        ${sizing`
            margin-bottom: ${MEDIUM}px;
        `}

        h1 {
            ${font`${MEDIUM}`};
            ${sizing`
                margin: ${MEDIUM}px;
            `}
        }

        span {
            ${font`${SMALL}`};
            font-weight: bold;
        }
    `}
`;

const ResultList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const answerAsResult = (answer, i) => (
    <Result answer={answer} key={`${i}-${answer.isRightAnswer}`} />
);

const Results = () => {
    const results = useResults();

    const numCorrect = results.filter(answer => answer.isCorrect).length;

    return (
        <>
            <Header>
                <Polygon>
                    <Score>
                        <h1>You Scored</h1>
                        <span>
                            {numCorrect} / {results.length}
                        </span>
                    </Score>
                </Polygon>
            </Header>
            <ContentPanel>
                <ResultList>{results.map(answerAsResult)}</ResultList>
            </ContentPanel>
            <FooterNavigation>
                <StyledLink to="/">Play Again?</StyledLink>
            </FooterNavigation>
        </>
    );
};

export default Results;

import React from "react";
import styled, { css } from "styled-components";

import { LARGE } from "components";

const ResultWrapper = styled.div`
    ${({ theme: { sizing, colors } }) => css`
        & * {
            ${sizing`
                margin: ${LARGE}px
            `}
        }
    `}
`;

const Result = ({ answer }) => {
    const { question, isRightAnswer } = answer;
    console.log(question);
    return (
        <ResultWrapper>
            {isRightAnswer ? "✔" : "❌"}
            {question}
        </ResultWrapper>
    );
};

export default Result;

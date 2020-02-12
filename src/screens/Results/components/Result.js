import React from "react";
import styled, { css } from "styled-components";

import { LARGE } from "components";

const ResultWrapper = styled.div`
    ${({ theme: { sizing, colors } }) => css`
        color: ${colors.primaryText};
        ${sizing`
            margin: 0 ${LARGE}px
        `}
    `}
`;

const Result = ({ answer }) => {
    const { question, isCorrect } = answer;
    console.log(question);
    return (
        <ResultWrapper>
            {isCorrect ? "✔" : "❌"}
            {question}
        </ResultWrapper>
    );
};

export default Result;

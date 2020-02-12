import React from "react";
import styled, { css } from "styled-components";
import { unescape } from "lodash";

import { LARGE, SMALL } from "components";
const ResultWrapper = styled.div`
    ${({ theme: { sizing, colors } }) => css`
        color: ${colors.primaryText};
        ${sizing`
            margin: ${SMALL}px ${LARGE}px
        `}
    `}
`;

const Result = ({ answer }) => {
    const { question, isCorrect } = answer;

    return (
        <ResultWrapper>
            {isCorrect ? "✔" : "❌"}
            {unescape(question)}
        </ResultWrapper>
    );
};

export default Result;

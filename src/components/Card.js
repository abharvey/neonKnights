import React from "react";
import styled, { css } from "styled-components";

import { MEDIUM, LARGE } from "components";

const CardContainer = styled.div`
    min-width: 200px;
    max-width: 800px;
    height: 250px;
    min-height: 250px;
    border-radius: 3px;
    transform: skew(10deg);
    flex-wrap: break-word;

    ${({ theme: { colors, breakpoints, sizing } }) => css`
        background-color: ${colors.tertiary};
        box-shadow: 5px 5px 2px ${colors.secondary};
        ${sizing`
            margin: ${MEDIUM}px;
            padding: ${LARGE}px;
        `}

        ${breakpoints.small`
            margin: 0;
            transform: skew(0);
            width: 100%;
            max-width: 100%;
            box-shadow: none;
            min-height: 300px;
        `}
    `};
`;

const QuestionText = styled.h2`
    transform: skew(-10deg);

    ${({ theme: { colors, font, breakpoints, sizing } }) => css`
        ${font`${MEDIUM}`}

        color: ${colors.darkText};

        ${sizing`
            padding: ${LARGE}px;
        `}

        ${breakpoints.small`
            transform: skew(0);
        `}
    `};
`;

export default ({ children }) => (
    <CardContainer>
        <QuestionText>{children}</QuestionText>
    </CardContainer>
);

import styled, { css } from "styled-components";
import { MEDIUM, LARGE } from "components";

const AnswerButton = styled.button`
    ${({ theme: { colors, font, breakpoints, sizing } }) => css`
        border-width: 0px;
        border-radius: 2px;
        border-style: solid;

        color: ${colors.lightText};
        background-color: ${colors.primary};
        border-color: ${colors.primary};
        box-shadow: 3px 2px ${colors.dropShadow};

        ${font`${MEDIUM}`}
        font-weight: bold;

        ${sizing`
            height: calc(${LARGE}px * 4);
            width: calc(${LARGE}px * 8);
            margin: ${LARGE}px calc(${LARGE}px * 2); 
        `}
    `}
`;

export default AnswerButton;

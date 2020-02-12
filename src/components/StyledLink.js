import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { MEDIUM, LARGE } from "components";

const StyledLink = styled(Link)`
    text-decoration: none;
    border-width: 0px;
    border-radius: 2px;
    border-style: solid;

    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${({ theme: { colors, font, sizing } }) => css`
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

export default StyledLink;

import React from "react";
import styled, { css } from "styled-components";

import { centeredFlexRow } from "components/cssUtils";
import { Polygon } from "components";

import { LARGE } from "components";

const Label = styled.label`
    position: relative;
    left: -25%;
    ${({ theme: { font, colors, sizing } }) => css`
        ${font`${LARGE}`};
        text-shadow: 2px 1px ${colors.dropShadow};
        ${sizing`
            margin-left: ${LARGE}px
        `}
    `}
`;

const Container = styled.span`
    ${centeredFlexRow};

    ${({ theme: { breakpoints } }) => css`
        ${breakpoints.small`
            & .background-logo {
                transform: scale(1.2,1.2);
                position: relative;
                left: 50%;
                top: -5%;
            }
        `}
    `};
`;

const CategoryLabel = ({ children }) => (
    <Container>
        <Polygon className="background-logo" />
        <Label>{children}</Label>
    </Container>
);

export default CategoryLabel;

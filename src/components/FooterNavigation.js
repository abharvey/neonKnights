import React from "react";
import styled, { css } from "styled-components";

import { LARGE, MEDIUM } from "components";

import { centeredFlexColumn, centeredFlexRow } from "./cssUtils";

const FooterNavigation = styled.span`
    ${centeredFlexRow};
    justify-content: space-between;
    ${({ theme: { breakpoints } }) => css`
        ${breakpoints.small` width: 100%;`}
    `}
`;

const Footer = styled.div`
    ${centeredFlexColumn};
    ${({ theme: { sizing } }) => css`
        ${sizing`
            margin: ${MEDIUM}px calc(${LARGE}px * 2);
        `}
    `};
`;

export default ({ children }) => (
    <Footer>
        <FooterNavigation>{children}</FooterNavigation>
    </Footer>
);

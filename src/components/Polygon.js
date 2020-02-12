import React from "react";
import { centeredFlexRow } from "components/cssUtils";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
    ${centeredFlexRow};
    ${({ theme: { colors } }) => css`
        filter: drop-shadow(5px 6px ${colors.primary});
    `};
`;

const Polygon = styled.div`
    padding: 4rem;
    clip-path: polygon(0% 25%, 100% 19%, 90% 75%, 50% 75%, 10% 75%);
    ${({ theme: { colors } }) => css`
        background-color: ${colors.secondary};
    `};
`;

export default ({ children, ...rest }) => (
    <Wrapper {...rest}>
        <Polygon>{children}</Polygon>
    </Wrapper>
);

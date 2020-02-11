import styled, { css } from "styled-components";

import { centeredFlexRow } from "./cssUtils";

const Header = styled.div`
    width: 100%;
    height: 10%;

    ${centeredFlexRow};

    ${({ theme: { colors } }) => css`
        color: ${colors.primary};
        background-color: ${colors.secondaryBackground};
    `};
`;

export default Header;

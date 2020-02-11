import styled, { css } from "styled-components";

import { centeredFlexRow } from "./cssUtils";

const Header = styled.div`
    width: 100%;
    min-height: 10%;

    ${centeredFlexRow};

    ${({ theme: { colors } }) => css`
        color: ${colors.lightText};
        background-color: ${colors.primaryBackground};
    `};
`;

export default Header;

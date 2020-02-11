import { centeredFlexRow } from "components/cssUtils";
import styled, { css } from "styled-components";

import { LARGE } from "./";

const QuestionCount = styled.span`
    ${({ theme: { colors, font } }) => css`
        ${centeredFlexRow};
        font-weight: bold;
        color: ${colors.secondaryBackground};
        text-shadow: 1px 1px ${colors.primaryBackground};
        ${font`${LARGE}`};
    `};
`;

export default QuestionCount;

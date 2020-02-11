import React from "react";
import { Redirect } from "react-router-dom";
import styled, { css } from "styled-components";

import { useLoadQuestions } from "data/api";
import {
    useCurrentQuestion,
    useIsLoading,
    useQuestionCount
} from "data/selectors";
import { useAnswerAction } from "data/actions";

import {
    Header,
    ContentPanel,
    FooterNavigation,
    Loading,
    LARGE
} from "components";
import { centeredFlexRow } from "components/cssUtils";

import CategoryLabel from "./components/CategoryLabel";
import QuestionCard from "./components/QuestionCard";
import AnswerButton from "./components/AnswerButton";

const QuestionCount = styled.span`
    ${({ theme: { colors, font } }) => css`
        ${centeredFlexRow};
        font-weight: bold;
        color: ${colors.secondaryBackground};
        text-shadow: 1px 1px ${colors.primaryBackground};
        ${font`${LARGE}`};
    `};
`;

const Quiz = () => {
    useLoadQuestions();
    const question = useCurrentQuestion();
    const loading = useIsLoading();
    const answerAction = useAnswerAction();
    const { current, total } = useQuestionCount();

    const handleClick = value => () => {
        answerAction(value);
    };

    if (loading) {
        return <Loading>Loading...</Loading>;
    }

    if (current >= total) {
        return <Redirect to="/results" />;
    }

    return (
        <>
            <Header>
                <CategoryLabel>{question.category}</CategoryLabel>
            </Header>
            <ContentPanel>
                <QuestionCard>{question.question}</QuestionCard>
            </ContentPanel>
            <QuestionCount>
                {current} / {total}
            </QuestionCount>
            <FooterNavigation>
                <AnswerButton onClick={handleClick("False")}>
                    False
                </AnswerButton>
                <AnswerButton onClick={handleClick("True")}>True</AnswerButton>
            </FooterNavigation>
        </>
    );
};

export default Quiz;

import React from "react";
import { Redirect } from "react-router-dom";

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
    QuestionCount,
    Card
} from "components";

import CategoryLabel from "./components/CategoryLabel";
import AnswerButton from "./components/AnswerButton";
import QuizSkeleton from "./QuizSkeleton";

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
        return <QuizSkeleton />;
    } else if (current > total) {
        return <Redirect to="/results" />;
    }

    return (
        <>
            <Header>
                <CategoryLabel>{question.category}</CategoryLabel>
            </Header>
            <ContentPanel>
                <Card>{question.question}</Card>
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

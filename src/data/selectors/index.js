import { useContext } from "react";

import { store } from "data/store";

export const useCurrentQuestion = () => {
    const { state } = useContext(store);

    return state.questions[state.currentQuestion];
};

export const useIsLoading = () => {
    const { state } = useContext(store);

    return state.loading;
};

export const useQuestionCount = () => {
    const { state } = useContext(store);

    const current = state.answers.length + 1;
    const total = state.questions.length;

    return {
        current,
        total
    };
};

export const hasNextQuestion = state =>
    state.currentQuestion < state.questions.length - 1;

const isCorrectAnswer = (a1, a2) =>
    a1.toString().toLowerCase() === a2.toString().toLowerCase();

export const results = state => {
    const { questions, answers } = state;

    return answers.map((userAnswer, i) => {
        const { question, answer } = questions[i];

        return {
            question,
            isCorrect: isCorrectAnswer(answer, userAnswer)
        };
    });
};

export const useResults = () => {
    const { state } = useContext(store);
    return results(state);
};

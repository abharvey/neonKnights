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

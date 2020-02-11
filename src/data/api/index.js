import { useEffect, useContext } from "react";
import { store } from "data/store";

export const loadQuestions = () =>
    fetch(
        `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
    ).then(response => response.json());

export const requiredQuestionInfo = question => ({
    category: question.category,
    question: question.question,
    answer: question.correct_answer
});

export const useLoadQuestions = () => {
    const { dispatch } = useContext(store);

    useEffect(() => {
        (async function fetchAndLoadQuestionData() {
            dispatch({ type: "LOADING", loading: true });

            const questionData = await loadQuestions();

            const questions = questionData.results.map(requiredQuestionInfo);

            dispatch({ type: "QUESTIONS/LOAD", questions });
            dispatch({ type: "LOADING", loading: false });
        })();
    }, [dispatch]);
};

import { appReducer } from "./";

describe("app reducer", () => {
    it("sets loading state", () => {
        const testState = {};
        const startLoad = { type: "LOADING", loading: true };

        expect(appReducer(testState, startLoad)).toEqual({
            loading: true
        });

        const endLoad = { type: "LOADING", loading: false };

        expect(appReducer(testState, endLoad)).toEqual({
            loading: false
        });
    });

    it("sets loads new question data", () => {
        const testState = {};
        const action = {
            type: "QUESTIONS/LOAD",
            questions: [
                {
                    category: "Test",
                    question: "q1",
                    answer: "true"
                }
            ]
        };

        expect(appReducer(testState, action)).toEqual({
            questions: [
                {
                    category: "Test",
                    question: "q1",
                    answer: "true"
                }
            ]
        });
    });

    it("overwrites question data on load", () => {
        const testState = {
            questions: [
                {
                    category: "Test",
                    question: "q1",
                    answer: "true"
                }
            ]
        };

        const action = {
            type: "QUESTIONS/LOAD",
            questions: [
                {
                    category: "Test",
                    question: "q10",
                    answer: "false"
                }
            ]
        };

        expect(appReducer(testState, action)).toEqual({
            questions: [
                {
                    category: "Test",
                    question: "q10",
                    answer: "false"
                }
            ]
        });
    });

    it("updates selected question on navigate next", () => {
        const testState = {
            questions: [{ question: "q1" }, { question: "q2" }],
            currentQuestion: 0
        };

        const action = {
            type: "QUESTIONS/NAV_NEXT"
        };

        expect(appReducer(testState, action)).toEqual({
            questions: [{ question: "q1" }, { question: "q2" }],
            currentQuestion: 1
        });
    });

    it("doesn't update selected question on navigate next if no more questions", () => {
        const testState = {
            questions: [{ question: "q1" }],
            currentQuestion: 0
        };

        const action = {
            type: "QUESTIONS/NAV_NEXT"
        };

        expect(appReducer(testState, action)).toEqual({
            questions: [{ question: "q1" }],
            currentQuestion: 0
        });
    });

    it("updates the answer to the current question", () => {
        const testState = {
            questions: [{ question: "q1" }],
            currentQuestion: 0,
            answers: []
        };

        const action = {
            type: "QUESTIONS/ANSWER",
            answer: "false"
        };

        expect(appReducer(testState, action)).toEqual({
            questions: [{ question: "q1" }],
            currentQuestion: 0,
            answers: ["false"]
        });
    });
});

import React from "react";
import { act, cleanup, render } from "@testing-library/react";

import DataProvider from "components/ContextProviders/__mocks__/DataProvider";
import defaultState from "data/defaultState";

import { useLoadQuestions, requiredQuestionInfo } from "./";

const mockQuestionResponse = {
    results: [
        {
            category: "Test Question",
            type: "boolean",
            difficulty: "hard",
            question: "Question 1",
            correct_answer: "True",
            incorrect_answers: ["False"]
        },
        {
            category: "Test Question",
            type: "boolean",
            difficulty: "hard",
            question: "Question 2",
            correct_answer: "False",
            incorrect_answers: ["True"]
        }
    ]
};

describe("Loading question data", () => {
    let dispatch, state;

    beforeEach(() => {
        fetch.resetMocks();
        dispatch = jest.fn();
        state = defaultState;
    });

    afterEach(() => {
        cleanup();
    });

    it("loads the minimal question info into the store", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockQuestionResponse));

        const TestHook = () => {
            useLoadQuestions();
            return null;
        };

        await act(async () => {
            render(
                <DataProvider {...{ state, dispatch }}>
                    <TestHook />
                </DataProvider>
            );
        });

        expect(dispatch).toHaveBeenCalledTimes(3);

        const questions = mockQuestionResponse.results.map(
            requiredQuestionInfo
        );

        expect(dispatch).toHaveBeenNthCalledWith(1, {
            loading: true,
            type: "LOADING"
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
            questions,
            type: "QUESTIONS/LOAD"
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
            loading: false,
            type: "LOADING"
        });
    });
});

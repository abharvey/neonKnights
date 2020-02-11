import React, { createContext } from "react";
import { render } from "@testing-library/react";
import { useLoadQuestions } from "./";

import DataProvider from "components/ContextProviders/DataProvider";

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
    it("loads the minimal question info into the store", () => {
        fetch.mockResponseOnce(JSON.stringify(mockQuestionResponse));

        const TestHook = () => {
            useLoadQuestions();
            return null;
        };

        const { getByTestId } = render(
            <DataProvider>
                <TestHook />
            </DataProvider>
        );
    });
});

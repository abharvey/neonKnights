import React from "react";
import { render } from "@testing-library/react";

import Quiz from "./Quiz";

describe("Quiz main page", () => {
    it("renders the quiz page", () => {
        const { getByTestId } = render(<Quiz />);
        const headerElement = getByTestId("category-header");
        expect(headerElement).toBeInTheDocument();
    });

    it("renders the first question", () => {
        const { getByTestId } = render(<Quiz />);
        const card = getByTestId("question-1-card");
        expect(card).toBeInTheDocument();
    });

    it("allows the user to answer a question", () => {
        const { getByTestId } = render(<Quiz />);
        const trueBtn = getByTestId("answer-nav-trueBtn");
        expect(trueBtn).toBeInTheDocument();

        // fireAction on true

        const falseBtn = getByTestId("answer-nav-falseBtn");
        expect(falseBtn).toBeInTheDocument();
        // fireAction on false
    });

    it("displays the correct answer after user answers", () => {
        const { getByTestId } = render(<Quiz />);

        // fireAction on true/false buttons

        const answer = getByTestId("question-1-card-answer");
        expect(answer).toBeInTheDocument();
    });
});

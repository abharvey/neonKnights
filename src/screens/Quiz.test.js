import React from "react";
import { render } from "@testing-library/react";

import Quiz from "./Quiz/Quiz";

describe("Quiz main page", () => {
    it("renders the quiz page", () => {
        const { getByTestId } = render(<Quiz />);
        const headerElement = getByTestId("category-header");
        expect(headerElement).toBeInTheDocument();
    });

    it("renders the first question", () => {
        const { getByTestId } = render(<Quiz />);
        const headerElement = getByTestId("question-1-card");
        expect(headerElement).toBeInTheDocument();
    });
});

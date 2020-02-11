import React from "react";
import { render } from "@testing-library/react";
import TriviaNight from "./TriviaNight";

test("renders trivia challenge home page by default", () => {
    const { getByText } = render(<TriviaNight />);
    const headerElement = getByText(/welcome to the trivia challenge/i);
    expect(headerElement).toBeInTheDocument();
});

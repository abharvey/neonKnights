import React from "react";
import { render } from "@testing-library/react";
import TriviaNight from "./TriviaNight";

test("renders learn react link", () => {
    const { getByText } = render(<TriviaNight />);
    const headerElement = getByText(/welcome to trivia challenge/i);
    expect(headerElement).toBeInTheDocument();
});

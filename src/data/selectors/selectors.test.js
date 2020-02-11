import { results } from "./";

describe("derived data selectors", () => {
    it("results builds a results object", () => {
        const mockState = {
            questions: [
                {
                    category: "Tests",
                    question: "Q1 Test",
                    answer: "true"
                },
                {
                    category: "Tests",
                    question: "Q2 Test",
                    answer: "false"
                }
            ],
            answers: ["true", "true"]
        };

        expect(results(mockState)).toEqual([
            {
                question: "Q1 Test",
                isRightAnswer: true
            },
            {
                question: "Q2 Test",
                isRightAnswer: false
            }
        ]);
    });
});

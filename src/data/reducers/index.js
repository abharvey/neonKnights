export const appReducer = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "LOADING": {
            newState.loading = action.loading;
            return newState;
        }
        case "QUESTIONS/LOAD": {
            newState.questions = action.questions;
            return newState;
        }
        case "QUESTIONS/NAV_NEXT": {
            if (newState.currentQuestion < state.questions.length - 1) {
                newState.currentQuestion = state.currentQuestion + 1;
            }
            return newState;
        }
        case "QUESTIONS/ANSWER": {
            newState.answers[state.currentQuestion] = action.answer;
            return newState;
        }
        default:
            return newState;
    }
};

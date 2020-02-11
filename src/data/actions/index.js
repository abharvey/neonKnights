import { useContext } from "react";

import { store } from "data/store";

export const useAnswerAction = () => {
    const { dispatch } = useContext(store);

    return answer => {
        dispatch({ type: "QUESTIONS/ANSWER", answer });
        dispatch({ type: "QUESTIONS/NAV_NEXT" });
    };
};

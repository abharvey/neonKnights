import { createContext } from "react";
import defaultState from "./defaultState";

const store = createContext(defaultState);

const { Provider } = store;
export { store, Provider };

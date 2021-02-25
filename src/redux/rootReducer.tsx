import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    todo: todoReducer,
    app: appReducer
});

export type RootState = ReturnType<typeof rootReducer>
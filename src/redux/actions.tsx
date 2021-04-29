import { ThunkDispatch } from "redux-thunk";
import { ITodo } from "../models/state"
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCHED_TODO, SHOW_LOADER, HIDE_LOADER, TodoActionTypes } from './types';

export const addTodo = (todo: ITodo): TodoActionTypes => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleTodo = (id: number): TodoActionTypes => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const removeTodo = (id: number): TodoActionTypes => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const showLoader = (): TodoActionTypes => {
    return {
        type: SHOW_LOADER,
    }
}

export const hideLoader = (): TodoActionTypes => {
    return {
        type: HIDE_LOADER,
    }
}

export const loadTodo = () => {
    return async (dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, TodoActionTypes>):Promise<void> => {
        dispatch(showLoader());
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const json = await response.json();
        setTimeout(() => {
            dispatch({type: FETCHED_TODO, payload: json});
            dispatch(hideLoader());
        }, 1500);
    }
}


import { ITodo } from "../models/state"
import { IFetchedTodo } from "../models/response"

export const ADD_TODO = 'TODO/ADD_TODO';
export const DELETE_TODO = 'TODO/DELETE_TODO';
export const TOGGLE_TODO = 'TODO/TOGGLE_TODO';
export const FETCHED_TODO = 'TODO/FETCHED_TODO';
export const SHOW_LOADER = 'APP/SHOW_LOADER';
export const HIDE_LOADER = 'APP/HIDE_LOADER';


interface addTodoAction {
        type: typeof ADD_TODO,
        payload: ITodo,
}

interface toggleTodoAction {
        type: typeof TOGGLE_TODO,
        payload: number,
}

interface removeTodoAction {
        type: typeof DELETE_TODO,
        payload: number,
}

interface showLoaderAction {
        type: typeof SHOW_LOADER,
}

interface hideLoaderAction {
        type: typeof HIDE_LOADER,
}

interface loadTodoAction {
    type: typeof FETCHED_TODO,
    payload: Array<IFetchedTodo>,
}


export type TodoActionTypes = addTodoAction | toggleTodoAction | removeTodoAction | showLoaderAction | hideLoaderAction | loadTodoAction;
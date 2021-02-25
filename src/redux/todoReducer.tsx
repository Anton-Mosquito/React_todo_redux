import { ITodo } from '../models/state';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCHED_TODO, TodoActionTypes } from './types';

export interface IinitialState {
    todos: Array<ITodo>
}

const initialState: IinitialState = {
    todos: []
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos.concat([action.payload])]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todo: ITodo) => todo.id !== action.payload)]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos:  [...state.todos.map((todo: ITodo) => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })]
            }
        case FETCHED_TODO:
            return {
                ...state,
                todos: [...action.payload]
            }
        default:
            return state;
    }
}


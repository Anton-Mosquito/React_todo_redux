import {SHOW_LOADER,HIDE_LOADER, TodoActionTypes} from './types';

interface IinitialState {
    loading: boolean
}

const initialState: IinitialState = {
    loading: false
}

export const appReducer = (state = initialState, action: TodoActionTypes) => {
    switch (action.type) {
        case SHOW_LOADER:
        return {
            ...state,
            loading: true
        }
        case HIDE_LOADER:
        return {
            ...state,
            loading: false
        }
        default:
        return state;
    }
}
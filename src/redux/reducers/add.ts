import { ADD_TODO, ADD_CHECKED, ADD_UPDATE, DEL_TODO } from '../actions/add'

interface List {
    name: string;
    checked: boolean;
}
interface Action {
    type: string;
    payload: List[];
}
interface IAppState {
    data: any[];
}
const initialState: IAppState = {
    data: []
};

const addTODOReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case ADD_CHECKED:
            return {
                ...state,
                data: action.payload,
            };
        case ADD_UPDATE:
            return {
                ...state,
                data: action.payload,
            };
        case DEL_TODO:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}
export default addTODOReducer;
import {ADD_LANG} from '../actions/language'

interface Language {
    name: string;
}
interface Action {
    type: string;
    payload: Language;
}
interface IAppState {
    data: string;
}
const initialState: IAppState = {
    data: ''
};

const addLangReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_LANG:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}
export default addLangReducer;
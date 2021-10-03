import { ADD_USER,LOGOUT } from '../actions/user'

interface user {
    name: string;
    email: string;
    password: string;
    isLogin: boolean
}
interface Action {
    type: string;
    payload: user;
}
interface IAppState {
    data: user;
}
const initialState: IAppState = {
    data: {
        name: '',
        email: '',
        password: '',
        isLogin: false
    }
};

const addUserReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                ...action.payload,
            };
        case LOGOUT:
            return {
                initialState
            };
        default:
            return state;
    }
}
export default addUserReducer;
import { combineReducers } from 'redux';
import add from './add';
import language from './language';
import user from './user';

export default combineReducers({
    add,
    language,
    user
});
export type RootState = ReturnType<typeof combineReducers>
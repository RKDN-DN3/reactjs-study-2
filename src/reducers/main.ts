import { combineReducers } from 'redux';
import todos from './todos';

const todoMain = combineReducers({
    todos,
});
export default todoMain;

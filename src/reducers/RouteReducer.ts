import { combineReducers } from 'redux';
import { useLocation } from 'react-router-dom';
import { ACTIVE_TODO } from '../actions/RouteAction';
import ActionModel from '../model/interface/ActionModel';
import PageInfo from '../model/interface/PageInfo';
import { routes } from '../constants/DataRoute';

function todo(state = [], action:ActionModel): any[] {
    state.map(
        (el:PageInfo) => (
            (el.id === action.model.id)
                ? Object.assign(el, { isActive: true })
                : Object.assign(el, { isActive: false })
        ),
    );
    return state;
}

function todos(state = [], action:ActionModel): any[] {
    switch (action.type) {
    case ACTIVE_TODO: {
        todo(state, action);
        return [...state];
    }
    default: {
        return routes;
    }
    }
}

const todoRoute = combineReducers({
    todos,
});
export default todoRoute;

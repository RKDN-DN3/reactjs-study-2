import { combineReducers } from 'redux';
import { useLocation } from 'react-router-dom';
import * as ActionTypes from '../constants/ActionTypes';
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

let initialState: [];
function todos(state = initialState, action:ActionModel): any[] {
    switch (action.type) {
    case ActionTypes.ACTIVE_TODO: {
        todo(state, action);
        return [...state];
    }
    default: {
        return routes;
    }
    }
}

export default todos;

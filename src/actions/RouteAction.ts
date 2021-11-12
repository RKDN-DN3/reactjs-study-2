import PageInfo from '../model/interface/PageInfo';
import ActionModel from '../model/interface/ActionModel';
import * as ActionTypes from '../constants/ActionTypes';

let nextTodoId = 0;
export function activeTodo(obj:PageInfo) {
    nextTodoId += 1;
    const actionModel:ActionModel = {
        id: nextTodoId,
        type: ActionTypes.ACTIVE_TODO,
        model: { ...obj, isActive: true },
    };
    return actionModel;
}

export function activeTodo2(obj:PageInfo) {
    nextTodoId += 1;
    const actionModel:ActionModel = {
        id: nextTodoId,
        type: ActionTypes.ACTIVE_TODO,
        model: { ...obj, isActive: true },
    };
    return actionModel;
}

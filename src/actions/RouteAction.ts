import PageInfo from '../model/interface/PageInfo';
import ActionModel from '../model/interface/ActionModel';

export const ACTIVE_TODO = 'ACTIVE_TODO';

let nextTodoId = 0;
export function activeTodo(obj:PageInfo) {
    nextTodoId += 1;
    const actionModel:ActionModel = {
        id: nextTodoId,
        type: ACTIVE_TODO,
        model: { ...obj, isActive: true },
    };
    return actionModel;
}

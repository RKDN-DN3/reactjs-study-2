import PageInfo from '../model/interface/PageInfo';
import * as ActionTypes from '../constants/ActionTypes';

let nextId:number = 0;

export function addTodo(obj:any) {
    nextId += 1;
    const objTemp:PageInfo = {
        id: 0,
        name: '',
        path: '',
        element: null,
        isActive: false,
    };
    return {
        type: ActionTypes.ADD_TODO,
        id: nextId,
        obj,
    };
}

export function delTodo(id:number, obj:any) {
    return {
        type: ActionTypes.ADD_TODO,
        id,
        obj,
    };
}

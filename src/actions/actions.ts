import PageInfo from '../model/interface/PageInfo';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

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
        type: ADD_TODO,
        id: nextId,
        obj,
    };
}

export function delTodo(id:number, obj:any) {
    return {
        type: ADD_TODO,
        id,
        obj,
    };
}

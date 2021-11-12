import { createStore } from 'redux';
import todoMain from '../reducers/main';

export default function configStoreMain() {
    const store = createStore(todoMain);
    return store;
}

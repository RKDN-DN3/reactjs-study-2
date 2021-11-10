import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoRoute from '../reducers/RouteReducer';
import Main from '../components/Main';
import App from '../App';

const store = createStore(todoRoute);

class MainPage extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
export default MainPage;

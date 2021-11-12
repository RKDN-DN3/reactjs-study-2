import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './containers/Main';
import App from './App';
import configStoreMain from './store/configStoreMain';

const store = configStoreMain();

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

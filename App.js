import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import MainApp from './src/Router';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(() => {}, applyMiddleware(sagaMiddleware));
class App extends Component {
    render() {
        return (
            <Provider store={store} >
            <MainApp />
            </Provider>
        );
    }
}
export default App;

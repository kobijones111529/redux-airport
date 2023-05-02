import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const id = (function * () {
    for (let i = 1; ; i++) {
        yield i;
    }
})();

const airlines = (state = [], action) => {
    if (action.type === 'airline/add') {
        return [
            ...state,
            {
                id: id.next().value,
                name: action.payload.name,
                number: action.payload.number
            }
        ];
    }

    return state;
};

const store = createStore(
    combineReducers({ airlines: airlines }),
    applyMiddleware(logger)
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
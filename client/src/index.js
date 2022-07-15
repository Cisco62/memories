import React from 'react';
import ReactDOM from 'react-dom/client';
//Keeping track of the store or global state using provider
import { Provider } from 'react-redux';

import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider> 
);


let arrayOfNumbers = [12, 3, 4, 15];

function sumOfNumbers(arrayOfNumbers) {
  
  let sum = 0;
        for(let i = 0; i < arrayOfNumbers.length; i++)
        {
            sum = sum + arrayOfNumbers[i];
        }
        return sum;
  
    //return arrayOfNumbers.length;
}

console.log("Sum of given array is " + sumOfNumbers(arrayOfNumbers));
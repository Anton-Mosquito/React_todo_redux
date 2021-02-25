import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from "webfontloader";

import styled, { createGlobalStyle } from 'styled-components';


import { compose, createStore, applyMiddleware, Store } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { TodoActionTypes } from './redux/types';
import { ITodo } from './models/state';
import { IinitialState } from './redux/todoReducer';

WebFont.load({
  google: {
    families: ["Oswald:wght@200;300;400;500;600;700&display=swap"],
  },
});

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
header,
footer,
aside {
  display: block;
}

html,
body {
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  text-size-adjust: 100%;
  font-family: 'Oswald', sans-serif;
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background:#edf5e1;
  min-height: 100vh;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

.done {
    text-decoration: line-through;
    color: #ccc;
}
`

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  ));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Global/>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

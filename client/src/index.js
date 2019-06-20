import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/store";
import './index.css';
import App from './js/components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
// import index from "./js/index";

render(
    <Provider store={ store }>
        <App />
    </Provider>,

document.getElementById("root")
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Router,Route, Switch} from "react-router-dom"
import {createBrowserHistory} from "history"
import Home from './components/home';
import Contact from './components/contact'
const hist=createBrowserHistory()
ReactDOM.render(
  <Router history={hist}>
  <Switch>
  <Route path="/contact" component={Contact}/>
  <Route path="/" component={Home}/>
  </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

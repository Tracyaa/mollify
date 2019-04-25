import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Router from './containers/Router';
import { Route, Link, withRouter } from 'react-router';


class App extends Component {

  render() {

    return (

        <div className="Mollify">
          <Router />
          <header className="App m-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>

          </header>
        </div>

    );
  }
}

export default withRouter(App);

import React, { Component } from 'react'
import { Route } from 'react-router'
import Signup from '../components/Signup';
import Login from '../components/Login';
// import Home from '../containers/Home';
import CaseList from '../containers/CaseList'

import StudentProfile from '../components/StudentProfile'


export default class Router extends Component {
  render() {

  	return (
  	  <React.Fragment>
        <Route exact path='/' component={StudentProfile} />
  	    <Route exact path="/mollify/signup" component={Signup}/>
  	  </React.Fragment>
  	)
  }
}

// <Route exact path="/mollify/cases" render={() => <CaseList currentUser={this.props.currentUser} />} />
// <Route exact path="/mollify/" render={() => <Home signupSubmitHandler={this.props.signupSubmitHandler} loginSubmitHandler={this.props.loginSubmitHandler}/>}/>

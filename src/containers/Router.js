import React, {Component} from 'react'
// import { Route } from 'react-router'
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import Signup from '../components/Signup';
import LoginForm from '../components/LoginForm';
import PostList from '../containers/PostList'
import Home from '../containers/Home'

import StudentProfile from '../components/StudentProfile'
import CounselorProfile from '../components/CounselorProfile'


export default class Router extends Component {
  render() {

  	return (
  	  <React.Fragment>
        <Route exact path='/' component={Home} />
  	    <Route exact path="/mollify/signup" component={Signup}/>
  	    <Route exact path="/mollify/login" component={LoginForm}/>
  	    <Route exact path="/mollify/student-profile" component={StudentProfile}/>
  	    <Route exact path="/mollify/counselor-profile" component={CounselorProfile}/>
  	    <Route exact path="/mollify/posts" component={PostList}/>
  	  </React.Fragment>
  	)
  }
}

// <Route exact path="/mollify/posts" render={() => <PostList currentUser={this.props.currentUser} />} />
// <Route exact path="/mollify/" render={() => <Home signupSubmitHandler={this.props.signupSubmitHandler} loginSubmitHandler={this.props.loginSubmitHandler}/>}/>

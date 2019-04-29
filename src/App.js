import React, {Component} from 'react';

import './App.css';
// REDUX
import {connect} from 'react-redux'
import {fetchPosts} from './redux/actions'

// ROUTING
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import Router from './containers/Router';

// import Navbar from "./components/Navbar";
import LoginForm from './components/LoginForm';
import Signup from "./components/Signup";
import PostList from "./containers/PostList";
import StudentProfile from './components/StudentProfile'
import CounselorProfile from './components/CounselorProfile'
import Home from './containers/Home';
import Navbar from './components/Navbar'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {

    return (
        <div className="Mollify">
          <Navbar />
          <React.Fragment>
            <Route exact path='/' component={Home} />
      	    <Route exact path="/mollify/signup" component={Signup}/>
      	    <Route exact path="/mollify/login" component={LoginForm}/>
      	    <Route exact path="/mollify/student-profile" component={StudentProfile}/>
      	    <Route exact path="/mollify/counselor-profile" component={CounselorProfile}/>
      	    <Route exact path="/mollify/posts" component={PostList}/>
      	  </React.Fragment>
          <Switch>
            <Route path='/login' render={(routerProps) => <LoginForm {...routerProps}/>}/>
            <Route path='/posts' render={(routerProps) => <PostList {...routerProps}/>}/>

          </Switch>
        </div>
    );
  }
}

const mapStateToProps = ({post, user}) => {
  return {
    posts: post.all,
    token: user.token
  }
}

export default withRouter(connect(mapStateToProps, {fetchPosts})(App));

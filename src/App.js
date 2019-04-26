import React, {Component} from 'react';

import './App.css';
// REDUX
import {connect} from 'react-redux'
import {fetchPosts} from './redux'

// ROUTING
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import Router from './containers/Router';

// import Navbar from "./components/Navbar";
import LoginForm from './components/LoginForm';
import Signup from "./components/Signup";
import PostList from "./containers/PostList";

import Home from './containers/Home';

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }




  render() {

    return (
        <div className="Mollify">
          <nav className="nav">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/mollify/signup">Signup</Link>
              <Link to="/mollify/login">Login</Link>
              <Link to="/mollify/student-profile">Student</Link>
              <Link to="/mollify/counselor-profile">Counselor</Link>
              <Link to="/mollify/posts">Posts</Link>
            </ul>
          </nav>

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

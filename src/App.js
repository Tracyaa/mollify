import React, {Component} from 'react';

import './App.css';
// REDUX
import {connect} from 'react-redux'
import {fetchPosts, fetchCurrentUser} from './redux/actions'

// ROUTING
import {Switch, Route, withRouter} from 'react-router-dom'

////////
import LoginForm from './components/LoginForm';
import Signup from "./components/Signup";
import PostList from "./containers/PostList";
import Profile from "./containers/Profile";
import ProfileCard from './components/ProfileCard'
import PostForm from './components/PostForm'
import VideoCall from './components/VideoCall'
import Home from './containers/Home';
import Navbar from './components/Navbar'

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
    if (!!localStorage.jwt) {
      this.props.fetchCurrentUser()
    }
  }

  render() {

    return (
        <div className="Mollify">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
      	    <Route path="/signup" component={Signup}/>
      	    <Route path="/login" component={LoginForm}/>
      	    <Route path="/profile/:name" component={Profile}/>
      	    <Route path="/posts/new" component={PostForm}/>
      	    <Route path="/video-call/:postId" component={VideoCall}/>
      	  </Switch>
        </div>
    );
  }
}

const mapStateToProps = ({post, user}) => {
  return {
    posts: post.all,
    token: user.token,
  }
}

export default withRouter(connect(mapStateToProps, {fetchPosts, fetchCurrentUser})(App));

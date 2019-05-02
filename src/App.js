import React, {Component} from 'react';

import './App.css';
// REDUX
import {connect} from 'react-redux'
import {fetchPosts, fetchCurrentUser} from './redux/actions'

// ROUTING
import {Switch, Route, withRouter} from 'react-router-dom'

// import Navbar from "./components/Navbar";
import LoginForm from './components/LoginForm';
import Signup from "./components/Signup";
import PostList from "./containers/PostList";
import StudentProfile from './components/StudentProfile'
import CounselorProfile from './components/CounselorProfile'
import PostForm from './components/PostForm'
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
      	    <Route path="/student-profile" component={StudentProfile}/>
      	    <Route path="/counselor-profile" component={CounselorProfile}/>
      	    <Route exact path="/situations" component={PostList}/>
      	    <Route exact path="/inquiries" component={PostList}/>
      	    <Route path="/posts/new" component={PostForm}/>
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

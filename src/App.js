import React, {Component} from 'react';

import './App.css';
// REDUX
import {connect} from 'react-redux'
import {fetchPosts} from './redux/actions'

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
  }

  render() {

    return (
        <div className="Mollify">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
      	    <Route path="/mollify/signup" component={Signup}/>
      	    <Route path="/mollify/login" component={LoginForm}/>
      	    <Route path="/mollify/student-profile" component={StudentProfile}/>
      	    <Route path="/mollify/counselor-profile" component={CounselorProfile}/>
      	    <Route exact path="/mollify/posts" component={PostList}/>
      	    <Route path="/mollify/posts/new" component={PostForm}/>
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

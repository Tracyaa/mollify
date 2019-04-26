import React, { Component } from 'react';
import {Switch, Route, Link, withRouter} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
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
      </div>
    )
  }
}

export default Navbar

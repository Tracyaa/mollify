import React, { Component } from 'react';
import {Switch, Route, Link, withRouter} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (

      <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
        <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><Link to="/">Mollify</Link></li>
            <li><Link to="/mollify/counselor-profile">Counselor</Link></li>
          </ul>
        </div>


        <div class="uk-navbar-right">

         <ul class="uk-navbar-nav">
           <li><Link to="/mollify/posts">All Posts</Link></li>
           <li><Link to="/mollify/posts">Write a post</Link></li>
           <li class="uk-active"><a href="#">Active</a></li>
           <li>
             <a href="#">Account</a>
             <div class="uk-navbar-dropdown">
               <ul class="uk-nav uk-navbar-dropdown-nav">
                   <li><Link to="/mollify/login">Login</Link></li>
                   <li><Link to="/mollify/signup">Signup</Link></li>
                   <li><Link to="/mollify/student-profile">Student</Link></li>
               </ul>
             </div>
           </li>
         </ul>

       </div>
      </nav>





      // <div className="nav-bar">
      //   <nav className="nav">
      //     <ul>
      //       <Link to="/">Home</Link>
      //       <Link to="/mollify/signup">Signup</Link>
      //       <Link to="/mollify/login">Login</Link>
      //       <Link to="/mollify/student-profile">Student</Link>
      //       <Link to="/mollify/counselor-profile">Counselor</Link>
      //       <Link to="/mollify/posts">Posts</Link>
      //     </ul>
      //   </nav>
      // </div>
    )
  }
}

export default Navbar

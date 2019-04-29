import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeUserFromState} from '../redux/actions'


class Navbar extends Component {
  render() {
    return (

      <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
        <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active"><Link to="/">Mollify</Link></li>
            <li><Link to="/mollify/counselor-profile">Counselor</Link></li>
          </ul>
        </div>


        <div className="uk-navbar-right">

         <ul className="uk-navbar-nav">
           <li><Link to="/mollify/posts">All Posts</Link></li>
           <li><Link to="/mollify/posts/new">Write a post</Link></li>
           <li>
             <a href="/mollify/student-profile">Account</a>
             <div className="uk-navbar-dropdown">
               <ul className="uk-nav uk-navbar-dropdown-nav">
                 {!!this.props.token ?
                   <div>
                     <li><Link to="/mollify/student-profile">P r o f i l e</Link></li>
                     <li onClick={this.props.removeUserFromState}><Link to="/">L o g o u t</Link></li>
                   </div>
                   :
                   <div>
                     <li><Link to="/mollify/login">L o g i n</Link></li>
                     <li><Link to="/mollify/signup">S i g n u p</Link></li>
                   </div>
                 }
               </ul>
             </div>
           </li>
         </ul>

       </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}
export default connect(mapStateToProps, {removeUserFromState})(Navbar);

// <a href="#">Account</a>

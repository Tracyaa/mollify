import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeUserFromState} from '../redux/actions'


class Navbar extends Component {

  render() {

    return (

      <nav className="navbar uk-navbar-container uk-margin" uk-navbar="mode: click">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li><Link to="/">Mollify</Link></li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">



           {(!!this.props.user.token && !this.props.user.has_a_post && (this.props.user.role === 'student')) ?
            <li><Link to="/posts/new">Tell us</Link></li> : null
           }

           <li>
             <Link uk-icon="user" to={!!this.props.user.token ? `/profile/${this.props.user.name.toLowerCase()}` : '/login'}></Link>
             <div className="uk-navbar-dropdown">
               <ul className="uk-nav uk-navbar-dropdown-nav">
                 {!!this.props.user.token ?
                   <div>
                     <li><Link to={`/profile/${this.props.user.name.toLowerCase()}`}>P r o f i l e</Link></li>
                     <li onClick={this.props.removeUserFromState}><Link to="/">L o g o u t</Link></li>
                   </div>
                   :
                   <div>
                     <li><Link to="/login">L o g i n</Link></li>
                     <li><Link to="/signup">S i g n u p</Link></li>
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
    user: state.user
  }
}
export default connect(mapStateToProps, {removeUserFromState})(Navbar);

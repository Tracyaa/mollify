import React from 'react';
import {connect} from 'react-redux';
import {fetchLogIn} from '../redux/actions';
import {withRouter} from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e) => {
   this.setState({
     [e.target.name] : e.target.value
   })
 }


 handleSubmit = (e) => {
    e.preventDefault()
    let userObj = this.state
    this.props.fetchLogIn(userObj, this.props.history.push)
    // if (!localStorage.jwt) {
    //
    //   this.props.history.push('/')
    // } else {
    //   this.props.history.push('/login')
    // }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="uk-text-lead">Login</h2>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user"></span>
            <input className="uk-input uk-border-rounded" type="text" id="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
            <input className="uk-input uk-border-rounded" type="password" id="id" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
          </div>
        </div>
        <button className='uk-button uk-button-primary uk-border-rounded'>Login</button>
      </form>
    );
  }
}

export default withRouter(connect(null, {fetchLogIn})(LoginForm));

import React from 'react';
import {connect} from 'react-redux';
import {fetchLogIn} from '../redux/actions';

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
    this.props.fetchLogIn(userObj)
    // this.props.fetchLogIn(userObj, this.props.history.push)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h2>Login Form</h2>
      <div className="uk-margin">
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: user"></span>
          <input className="uk-input uk-border-rounded" type="text" id="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>
      </div>
      <div className="uk-margin">
        <div className="uk-inline">
          <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
          <input className="uk-input uk-border-rounded" type="password" id="id" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
      </div>
      <button className='uk-button uk-button-primary uk-border-rounded'>Login</button>
    </form>

      // <div className="login">
      //   <h2>LoginForm</h2>
      //   <form onSubmit={this.handleSubmit}>
      //     <li><input type="text" id="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange } /></li>
      //     <li><input type="password" id="id" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange } /></li>
      //     <input type="submit" />
      //   </form>
      //   <p> {this.state.success} </p>
      // </div>

    );
  }
}

export default connect(null, {fetchLogIn})(LoginForm);

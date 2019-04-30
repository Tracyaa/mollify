import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSignup} from '../redux/actions'

class Signup extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    gender: "",
    age: null,
    school: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.fetchSignup(this.state);
    this.setState({
      email: "",
      password: "",
      password_confirmation: "",
      gender: "",
      age: null,
      school: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h2>Signup Form</h2>
        <div className="uk-margin">
          <div className="uk-inline">
            <input className="uk-input uk-border-rounded" type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changeHandler}required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <input className="uk-input uk-border-rounded" type="text" placeholder="email" name="email" value={this.state.email} onChange={this.changeHandler}required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <input className="uk-input uk-border-rounded" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.changeHandler} required/>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <input className="uk-input uk-border-rounded" type="password" placeholder="confirm password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.changeHandler} required/>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <select className="uk-select uk-border-rounded" required>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
                <option value='other'>Other</option>
            </select>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <input className="uk-input uk-border-rounded" type="number" placeholder="age" name="age" value={this.state.age} onChange={this.changeHandler} required/>
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <input className="uk-input uk-border-rounded" type="text" placeholder="school" name="school" value={this.state.school} onChange={this.changeHandler} required/>
          </div>
        </div>
        <button className='uk-button uk-button-primary uk-border-rounded'>Signup</button>
      </form>
    );
  }
}



export default connect(null, {fetchSignup})(Signup);

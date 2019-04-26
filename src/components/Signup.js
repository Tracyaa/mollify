import React, { Component } from 'react'


class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    gender: "",
    age: null,
    school: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state));
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      email: "",
      password: "",
      gender: "",
      age: null,
      school: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <li><input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changeHandler} /></li>
        <li><input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.changeHandler} /></li>
        <li><input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.changeHandler} /></li>
        <li><select name="gender" value={this.state.value} onChange={this.changeHandler}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select></li>
      <li><input type="number" placeholder="age" name="age" value={this.state.age} onChange={this.changeHandler} /></li>
        <li><input type="text" placeholder="school" name="school" value={this.state.school} onChange={this.changeHandler} /></li>
        <li><button>Sign Up</button></li>
      </form>
    );
  }
}

export default Signup;

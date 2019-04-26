import React from "react";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    success: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  // loginSubmitHandler = e => {
  //   e.preventDefault();
  //   this.props.loginSubmitHandler(e, this.state);
  //   this.setState({
  //     success: "Done!"
  //   })
  // };

  render() {
    return (
      <div className="login">
        <h2>LoginForm</h2>
        <form onSubmit={this.loginSubmitHandler}>
          <li><input type="text" id="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} /></li>
          <li><input type="password" id="id" placeholder="password" value={this.state.password} onChange={this.changeHandler} /></li>
          <input type="submit" />
        </form>
        <p> {this.state.success} </p>
      </div>

    );
  }
}

export default LoginForm;

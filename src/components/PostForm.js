import React, { Component } from 'react';
import {connect} from 'react-redux'

class PostForm extends Component {

  state = {
    student_id: "",
    gender_preference: "",
    type: "",
    content: ""
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state));
  };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    console.log(this.props.user);
    return (

        <form onSubmit={this.submitHandler} className="uk-container uk-container-expand">
          <fieldset className="uk-fieldset">

            <legend className="uk-legend">Write new Post:</legend>

            <div className="uk-margin">
              <select className="uk-select" name="gender_preference" onChange={this.changeHandler}>
                <option>choose your preferred gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="uk-margin">
              <textarea className="uk-textarea" rows="5" placeholder="Textarea"></textarea>
            </div>
          </fieldset>
          <button className="uk-button-small uk-button-default">Submit</button>

        </form>


    )
  }

}

const mapStateToProps = ({user}) => {
  return {
    user: user
  }
}


export default connect(mapStateToProps)(PostForm);

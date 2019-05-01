import React, { Component } from 'react';
import {connect} from 'react-redux'
import {postPost, patchUserInfo} from '../redux/actions'



class PostForm extends Component {

  state = {
    student_id: this.props.user.id,
    gender_preference: "",
    type: "",
    content: ""
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (!this.props.user.has_a_post) {
      this.props.patchUserInfo(this.props.user)
      this.props.postPost(this.state)
      this.props.history.push('/mollify/posts')
    } else {
      this.props.history.push('/mollify/login')
    }
  };



  render() {
    return (

        <form onSubmit={this.submitHandler} className="uk-container uk-container-expand">
          <fieldset className="uk-fieldset">

            <legend className="uk-legend">Tell us your situation:</legend>

            <div className="uk-margin">
              <select onChange={this.changeHandler} className="uk-select" name="gender_preference">
                <option>choose preferred gender for your counselor</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="uk-margin">
              <textarea onChange={this.changeHandler} name="content" className="uk-textarea" rows="5" placeholder="Textarea" ></textarea>
            </div>
          </fieldset>
          <button className="uk-button-small uk-button-default">Submit</button>

        </form>


    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, {postPost, patchUserInfo})(PostForm);

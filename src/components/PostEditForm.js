import React, { Component } from 'react';
import {connect} from 'react-redux'
import {patchPost} from '../redux/actions'
import {withRouter} from 'react-router-dom'

class PostEditForm extends Component {

  state = {
    student_id: this.props.user.id,
    gender_preference: this.props.post.gender_preference,
    type: this.props.post.type,
    content: this.props.post.content
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.patchPost(this.props.post.id, this.state)
    this.props.handleClose()
  };


  render() {
    return (

        <form onSubmit={this.submitHandler} className="uk-container uk-container-expand">
          <fieldset className="uk-fieldset">

            <legend className="uk-legend">Edit your situation:</legend>

            <div className="uk-margin">
              <select value={this.state.gender_preference} onChange={this.changeHandler} className="uk-select" name="gender_preference">
                <option>choose preferred gender for your counselor</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="uk-margin">
              <textarea  value={this.state.content} onChange={this.changeHandler} name="content" className="uk-textarea" rows="5"></textarea>
            </div>
          </fieldset>
          <button className="uk-button-small uk-button-default uk-border-rounded">Submit</button>

        </form>


    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps, {patchPost})(PostEditForm));

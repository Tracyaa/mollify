import React, { Component } from 'react';
import {connect} from 'react-redux'
import {patchPost} from '../redux/actions'

class PostEditForm extends Component {

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
    console.log('testing');
    // this.props.patchPost(this.state)
    // this.props.history.push('/posts')
  };


  render() {
    return (

        <form onSubmit={this.submitHandler} className="uk-container uk-container-expand">
          <fieldset className="uk-fieldset">

            <legend className="uk-legend">Edit your situation:</legend>

            <div className="uk-margin">
              <select value={this.props.post.gender_preference} onChange={this.changeHandler} className="uk-select" name="gender_preference">
                <option>choose preferred gender for your counselor</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="uk-margin">
              <textarea value={this.props.post.content} onChange={this.changeHandler} name="content" className="uk-textarea" rows="5" placeholder="Textarea" ></textarea>
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


export default connect(mapStateToProps, {patchPost})(PostEditForm);

import React, { Component } from 'react';
// import { connect } from 'react-redux';

class PostCard extends Component {

  render() {
    return (
      <div>
          <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-border-rounded">
            <h3 className="uk-card-title">No name</h3>
            <p>{this.props.post.content}</p>
            <div className="uk-card-footer">
              <a href="#" className="uk-button uk-button-text">Read more</a>
            </div>
          </div>
      </div>



    )
  }
}










// const mapStateToProps = { removeCase }

export default PostCard

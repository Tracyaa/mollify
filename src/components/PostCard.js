import React, { Component } from 'react';
// import { connect } from 'react-redux';

class PostCard extends Component {

  render() {
    return (
      <div className="uk-child-width-1-2@s uk-grid-match uk-grid">
        <div>
        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 className="uk-card-title">No name</h3>
            <p>{this.props.post.content}</p>
        </div>
    </div>
      </div>


    )
  }
}










// const mapStateToProps = { removeCase }

export default PostCard

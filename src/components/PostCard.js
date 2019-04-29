import React, { Component } from 'react';
import postReducer from '../redux/postReducer';
import { connect } from 'react-redux';

class CaseCard extends Component {

  render() {
    return (
      <div className="post-card">

      </div>
    )
  }
}










// const mapStateToProps = { removeCase }

export default connect()(CaseCard)

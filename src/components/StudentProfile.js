import React, { Component } from 'react'
import { connect } from 'react-redux'

class StudentProfile extends Component {

  render() {

    return(
      <div>
        <h2>This is the Student Profile Page</h2>
        <h2>{this.props.user.name}</h2>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(StudentProfile)

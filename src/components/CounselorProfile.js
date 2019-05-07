import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

class CounselorProfile extends Component {

  render() {

    return(
      <div>
        <h2>Hello, {this.props.user.name}</h2>
        <Image src={this.props.user.img_url} size='medium' circular centered/>


      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(CounselorProfile)

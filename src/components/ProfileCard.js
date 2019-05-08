import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

class ProfileCard extends Component {

  render() {

    return(
      <div className="profile-card uk-width-1-4@m uk-text-center">
        <div className="profile-card-content uk-card uk-card-default">

        <h3>{this.props.user.name}'s Profile</h3>
          <li><Image src={this.props.user.img_url} size='medium' circular centered/></li>
          <li>{this.props.user.rating}</li>
          <li>{this.props.user.gender}</li>
          <li>{this.props.user.email}</li>
          <li>{this.props.user.bio}</li>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(ProfileCard)

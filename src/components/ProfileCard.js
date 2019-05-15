import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

class ProfileCard extends Component {

  render() {

    return(
      <div className="profile-card uk-width-1-4@m uk-text-center">
        <div className="uk-container profile-card-content uk-card uk-card-default uk-border-rounded">

          <li><Image src={this.props.user.img_url} size='small' circular centered/></li>
          <h3>{this.props.user.name}{this.props.user.role === 'counselor' ? `, ${this.props.user.title}` : null}</h3>
          {this.props.user.role === 'student' ? <li>Age: {this.props.user.age}</li> : null}
          <li>Gender: {this.props.user.gender}</li>
          <li>{this.props.user.rating}</li>
          <li>{this.props.user.email}</li>
          {this.props.user.role === 'counselor' ? <li>Bio:</li> : null}
          <div className="uk-height-medium">
            {this.props.user.role === 'counselor' ?
            <div className="js-wrapper">
              <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
                <li>{this.props.user.bio}</li>
              </div>
            </div>
            : null}
          </div>
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

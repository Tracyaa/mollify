import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (

      <div>
        <h3 className="home uk-h3 uk-container uk-container-xsmall" style={{color:'white'}}>
          Welcome to Mollify
          <br/>
          <br/>
          Student can only have one open situation at a time
          <br/>
          Your name will not be shown unless you accept the invitation
          <br/>
          <br/>
          All conversations will go through video calls
        </h3>
      </div>
    )
  }
}

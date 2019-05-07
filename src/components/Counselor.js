import React, { Component } from 'react';
import { connect } from 'react-redux'


const api_key = '580023c18b06bdf56399afd6824c119e'
const resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=mental&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + api_key;

class Counselor extends Component {

  componentDidMount() {
    fetch(resource_url)
    .then(resp => resp.json())
    .then(resJson => resJson.data.map(data => data.profile))
  }

  render() {

    return (
      <div>

      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Counselor)

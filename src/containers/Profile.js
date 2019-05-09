import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from '../containers/PostList'
import ProfileCard from '../components/ProfileCard'

class Profile extends Component {

  render() {

    return(
      <div className="profile uk-text-center uk-child-width-1-2@s uk-grid-match uk-grid" data-uk-grid="masonry: true">

        <ProfileCard />

        <PostList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Profile)

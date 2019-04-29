import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostCard from '../components/PostCard'



class PostList extends Component {


  // filteredByGender = () => {
  //
  // }

  render() {
    return (
      <div className="post-card">
        <h2>All students posts</h2>
        <ul>
          {/* postCards */}
        </ul>
      </div>

    )
  }

}



const mapStateToProps = state => ({posts: state.posts})
//
export default connect(mapStateToProps)(PostList)

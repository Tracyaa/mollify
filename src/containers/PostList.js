import React, { Component } from 'react';
// import adapter from '../adapters/adapter';
import PostCard from '../components/PostCard'
import { connect } from 'react-redux'
import { getPosts } from '../actions/postActions'


class PostList extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  // filteredByGender = () => {
  //
  // }

  render() {
    return (
      <div className="post-card">
        <ul>
          {/* postCards */}
        </ul>
      </div>

    )
  }

}

// export default PostList;

const mapStateToProps = state => ({posts: state.posts})

export default connect(mapStateToProps, { getPosts })(PostList)

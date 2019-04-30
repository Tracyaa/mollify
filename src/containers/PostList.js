import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostCard from '../components/PostCard'



class PostList extends Component {

  availablePosts = () => {
    if (!!this.props.posts) {

      let userPosts = this.props.posts.filter(post => post.student_id === this.props.user.id)
      return userPosts.map(post => <PostCard key={post.id} post={post}/>)
    }
  }

  render() {
    return (
      <div>
        <h2>All students posts</h2>
        <div className="post-list post-card uk-child-width-1-3@s uk-grid-match uk-grid" data-uk-grid="masonry: true">
          {this.availablePosts()}
          {/*this.props.role === 'counselor' ?
            this.availablePosts()
            :
            <div>
              <h1>You sucq</h1>
              <h2>You mad bro</h2>
              <h3>You mad merengue</h3>
            </div>
          */}
        </div>
      </div>

    )
  }

}

// const mapStateToProps = (state) => state

const mapStateToProps = state => {
  return {
    posts: state.post.all,
    role: state.user.role,
    user: state.user
  }
}

export default connect(mapStateToProps)(PostList)

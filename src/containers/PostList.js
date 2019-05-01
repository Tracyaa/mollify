import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostCard from '../components/PostCard'



class PostList extends Component {

  // availablePosts = () => {
  //   if (!!this.props.posts) {
  //
  //     let userPosts = this.props.posts.filter(post => post.student_id === this.props.user.id)
  //     return userPosts.map(post => <PostCard key={post.id} post={post}/>)
  //   }
  // }

  allPosts = () => {
    return this.props.posts.map(post => <PostCard key={post.id} post={post}/>)
  }

  studentPosts = () => {
    if (!!this.props.posts) {
      let studentPosts = this.props.posts.filter(post => post.student_id === this.props.user.id)
      return studentPosts.map(post => <PostCard key={post.id} post={post}/>)
    }
  }

  render() {
    return (
      <div>
        <h2>All students posts</h2>
        <div className="post-list post-card uk-child-width-1-3@s uk-grid-match uk-grid" data-uk-grid="masonry: true">
          {this.props.user.role === 'counselor' ?
            this.allPosts()
            :
              // <PostCard key={this.props.user.posts[0].id} post={this.props.user.posts[0]} />
            this.studentPosts()
          }
        </div>
      </div>

    )
  }

}

// const mapStateToProps = (state) => state

const mapStateToProps = state => {
  return {
    posts: state.post.all,
    user: state.user
  }
}

export default connect(mapStateToProps)(PostList)

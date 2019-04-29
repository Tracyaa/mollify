import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostCard from '../components/PostCard'



class PostList extends Component {


  availablePosts = () => {
    console.log(this.props.posts);
    if (!!this.props.posts) {
      return this.props.posts.map(post => <PostCard key={post.id} post={post}/>)
    }
  }


  render() {
    return (
      <div className="post-card">
        <h2>All students posts</h2>
        <ul>
          {this.props.role === 'counselor' ?
            this.availablePosts()
            :
            <h1>You suck</h1>
          }
        </ul>
      </div>

    )
  }

}

// const mapStateToProps = (state) => state

const mapStateToProps = state => {
  return {
    posts: state.post.all,
    role: state.user.role
  }
}

export default connect(mapStateToProps)(PostList)

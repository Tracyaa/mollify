import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostCard from '../components/PostCard'

class PostList extends Component {

  allPosts = () => {
    let activePosts = this.props.posts.filter(post => !post.activated || this.props.user.id === post.counselor_id)
    return activePosts.map(post => <PostCard key={post.id} post={post}/>)
  }

  studentPosts = () => {
    if (!!this.props.posts) {
      let studentPosts = this.props.posts.filter(post => post.student_id === this.props.user.id)
      return studentPosts.map(post => <PostCard key={post.id} post={post}/>)
    }
  }

  inquiriesPosts = () => {
    let inquiries = this.props.posts.filter(post => this.props.user.id === post.counselor_id)
    return inquiries.map(post => <PostCard key={post.id} post={post}/>)
  }

  render() {

    return (
      <div>
        {this.props.user.role === 'counselor' ?
          <h2>ALL INQUIRIES</h2> :
          <h2>ALL SITUATIONS</h2>
        }
        <div className="post-list post-card uk-child-width-1-3@s uk-grid-match uk-grid" data-uk-grid="masonry: true">
          {this.props.user.role === 'counselor' ?
            this.allPosts() : this.studentPosts()
          }

        </div>
      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    posts: state.post.all,
    user: state.user
  }
}

export default connect(mapStateToProps)(PostList)

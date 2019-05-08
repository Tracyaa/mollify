import React, { Component } from 'react';
import { connect } from 'react-redux'
import {patchPost} from '../redux/actions'
import { Button, Divider } from 'semantic-ui-react'


class VideoCall extends Component {
  state = {
    videoRoomLink: "",
    videoRoomName: "",
    inRoom: false
  }

  handleCreateLink = () => {
    this.createVideoRoom()
  }

  createVideoRoom = () => {
    return fetch("https://api.daily.co/v1/rooms", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer 3137d1b0d526cff69a0fab9c482ee2cdc34fee1dbae73fd9e94257df35c287c4'
      },
      body: JSON.stringify({
        'privacy': 'public',
        'properties': {'max_participants': 2}
      })
    })
    .then(resp => resp.json())
    .then(videoRoom => {
      this.setState({
        videoRoomLink: videoRoom.url,
        videoRoomName: videoRoom.name
      }, () => this.props.patchPost(parseInt(this.props.match.params.postId), {video_room_link: this.state.videoRoomLink, video_room_name: this.state.videoRoomName}))
    })
  }

  joinVideoRoom = () => {
    const videoUrl = this.props.posts.find(post => post.id === parseInt(this.props.match.params.postId)).video_room_name
    return fetch(`https://api.daily.co/v1/rooms/${videoUrl}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer 3137d1b0d526cff69a0fab9c482ee2cdc34fee1dbae73fd9e94257df35c287c4'
      }
    })
    .then(resp => resp.json())
    .then(videoRoom => {
      this.setState({
        videoRoomLink: videoRoom.url,
        videoRoomName: videoRoom.name,
        inRoom: true
      })
    })
  }

  deleteVideoRoom = () => {
    const videoUrl = this.props.posts.find(post => post.id === parseInt(this.props.match.params.postId)).video_room_name
    return fetch(`https://api.daily.co/v1/rooms/${videoUrl}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer 3137d1b0d526cff69a0fab9c482ee2cdc34fee1dbae73fd9e94257df35c287c4',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(videoRoom => {
      this.setState({
        videoRoomLink: "",
        videoRoomName: ""
      }, () => this.props.patchPost(parseInt(this.props.match.params.postId), {video_room_link: this.state.videoRoomLink, video_room_name: this.state.videoRoomName}))
    })
  }

  leaveVideoRoom = () => {
    this.setState({inRoom: false})
  }

  render() {
    return (
      <div className="video-call">
      {this.props.user.role === 'counselor' ?
        <Button.Group basic>
          <Button onClick={this.handleCreateLink}>Get a Room</Button>
           <Button onClick={this.deleteVideoRoom}>Delete Room</Button>
        </Button.Group> :
        <Button.Group basic>
          <Button onClick={this.joinVideoRoom}>Join Room</Button>
           <Button onClick={this.leabeVideoRoom}>Leave Room</Button>
        </Button.Group>
      }
        <Divider />
        <iframe width="600" height="600"
        allow="camera; microphone; autoplay"
        src={this.state.videoRoomLink}
        title="what">
        </iframe>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.post.all
  }
}

export default connect(mapStateToProps, {patchPost})(VideoCall)

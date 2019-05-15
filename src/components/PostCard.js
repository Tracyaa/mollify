import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash'
import { Button, Header, Icon, Modal, Card, Image, Popup, Container} from 'semantic-ui-react'
import PostEditForm from '../components/PostEditForm'
import { patchPost, deletePost, patchUserInfo } from '../redux/actions'
import { NavLink } from 'react-router-dom'
const timeoutLength = 2500

class PostCard extends Component {

  state = {
    edit: false,
    showModal: false,
    isOpen: false,
    isCallOpen: false
  }

  handleClick = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleDelete = () => {
    this.props.patchUserInfo(this.props.user)
    this.props.deletePost(this.props.post.id)
  }

  handleReadMore = () => {
    this.setState({
      showModal: true
    })
  }

  handleClose = () => {
    this.setState({
      edit: false,
      showModal: false
    })
  }

  handleSendRequest = () => {
    let patchObj = {counselor_id: this.props.userId, requested: true}
    this.props.patchPost(this.props.post.id, patchObj)
  }
  handleCancelRequest = () => {
    let patchObj = {counselor_id: null, requested: false}
    this.props.patchPost(this.props.post.id, patchObj)
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }
  handleCloseCard = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  handleAccept = () => {
    let patchObj = {activated: true}
    this.props.patchPost(this.props.post.id, patchObj)
  }
  handleDecline = () => {
    this.setState({ isOpen: false })
    let patchObj = {counselor_id: null, requested: false, activated: false}
    this.props.patchPost(this.props.post.id, patchObj)
  }

  handleOpenCall = () => {
    this.setState({ isCallOpen: true })
  }

  handleCloseCallCard = () => {
    this.setState({ isCallOpen: false })
  }

  counselorRequestCard = () => {
    if (!!this.props.post.counselor) {
      return (
        <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>{this.props.post.counselor.name}, {this.props.post.counselor.title}</Card.Header>
          <Card.Meta>{this.props.post.counselor.gender}</Card.Meta>
          <Card.Description>
            <div className="uk-height-medium">
              <div className="js-wrapper">
                <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
                  {this.props.post.counselor.bio}
                </div>
              </div>
            </div>

          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {this.props.post.activated ? (!!this.props.post.video_room_link ?
            <NavLink to={`/video-call/${this.props.post.id}`} postId={this.props.post.id}>
              <Button basic color='green'>Go to Room</Button>
            </NavLink> :
            <Button basic color='green'>Schedule a call</Button>) :
            <div className='ui two buttons'>
              <Button onClick={this.handleAccept} basic color='green'>
                Accept
              </Button>
              <Button onClick={this.handleDecline} basic color='red'>
                Decline
              </Button>
            </div>
          }

        </Card.Content>
      </Card>
      )
    }
  }

  openVideoRoomCard = () => {
    if (!!this.props.post.counselor) {
      return (
        <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>{this.props.post.student.name}</Card.Header>
          <Card.Meta>{this.props.post.student.gender} / {this.props.post.student.school}</Card.Meta>
          <Card.Description>
            Time scheduled
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <NavLink to={`/video-call/${this.props.post.id}`}>
            <Button basic color='green'>Ready to talk?</Button>
          </NavLink>
        </Card.Content>
      </Card>
      )
    }
  }

  render() {

    const editForm = <PostEditForm handleClose={this.handleClose} post={this.props.post}/>

    const popupBell = (
      <Popup
        trigger={<Icon name={!this.props.post.video_room_link ? 'bell outline' : 'phone'} />}
        content={this.counselorRequestCard()}
        on='click'
        open={this.state.isOpen}
        onClose={this.handleCloseCard}
        onOpen={this.handleOpen}
        position='bottom left'
      />)

    const pending = <Icon name='paper plane outline' />

    // const accepted = <Icon name='check circle outline'/>

    const popupCheck = (
      <Popup
        trigger={<Icon name='check circle outline' />}
        content={this.openVideoRoomCard()}
        on='click'
        open={this.state.isCallOpen}
        onClose={this.handleCloseCallCard}
        onOpen={this.handleOpenCall}
        position='bottom left'
      />)

    return (
      <div>
          <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-border-rounded">
            <h3 className="post-card-title uk-card-title"> {this.props.post.activated ?
                this.props.post.student.name : 'Anonymous'}
                {this.props.userId === this.props.post.counselor_id ? (this.props.post.activated ? popupCheck : pending) : null}
                {this.props.post.requested && this.props.role === 'student'? popupBell : null}
            </h3>
            <p className="uk-panel uk-panel-box uk-text-truncate">{this.props.post.content}</p>
            <div className="uk-card-footer">

              <Modal open={this.state.showModal} trigger={<a onClick={this.handleReadMore} href="#" className="uk-button uk-button-text">Read more</a>} >

                <Modal.Content image scrolling>
                  <Container>
                    <Modal.Description>
                      <Header>Age {this.props.post.student.age} {this.props.post.student.gender === 'female' ? <Icon name='venus' /> : (
                          this.props.post.student.gender === 'male' ? <Icon name='mars' /> : <Icon name='venus mars' />
                      )} Preferred Gender: {this.props.post.gender_preference}
                    </Header>
                    {this.state.edit ? null : <p>{this.props.post.content}</p>}
                    {this.state.edit ? editForm : null}
                  </Modal.Description>

                </Container>
                </Modal.Content>

                <Modal.Actions>
                  {this.props.userId === this.props.post.student.id ?
                    (!this.state.edit ?
                      <div>
                        {!this.props.post.activated ?
                          <Button className="ui red basic button" onClick={this.handleDelete}>
                            Delete
                          </Button> : null
                        }
                        <Button className="ui grey basic button" onClick={this.handleClose}>
                          Close
                        </Button>
                        <Button className="ui teal basic button" onClick={this.handleClick}>
                          Edit<Icon name='chevron right' />
                        </Button>
                      </div>
                       :
                     <div>
                        <Button className="ui teal basic button" onClick={this.handleClick}>
                          <Icon name='chevron left' />Cancel
                        </Button>

                     </div>
                    ) :
                     <div>
                       <Button className="ui red basic button" onClick={this.handleClose}>
                         Close
                       </Button>
                       {this.props.post.counselor_id === this.props.userId ? (
                         this.props.post.activated ?
                         <Button disabled>Accepted</Button>
                           :
                         <Button onClick={this.handleCancelRequest} className="ui teal basic button">
                         Cancel Request
                         </Button>
                       )
                       :
                       <Button onClick={this.handleSendRequest} className="ui teal basic button">
                       Send Request<Icon name='chevron right' />
                       </Button>}
                  </div>
                  }


                </Modal.Actions>
              </Modal>

            </div>
          </div>
      </div>



    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    role: state.user.role,
    user: state.user
  }
}

export default connect(mapStateToProps, {patchPost, deletePost, patchUserInfo})(PostCard)

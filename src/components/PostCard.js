import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Button, Header, Icon, Modal, Card, Image, Grid, Popup, Container} from 'semantic-ui-react'
import PostEditForm from '../components/PostEditForm'
import {patchPost} from '../redux/actions'
const timeoutLength = 2500

class PostCard extends Component {

  state = {
    edit: false,
    showModal: false,
    isOpen: false
  }

  handleClick = () => {
    this.setState({
      edit: !this.state.edit
    })
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

  handleClickBell = () => {
    console.log('bell');
  }
  handleAccept = () => {

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

  counselorRequestCard = () => {
    if (!!this.props.post.counselor) {
      return (
        <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>{this.props.post.counselor.name}</Card.Header>
          <Card.Meta>{this.props.post.counselor.gender} / {this.props.post.counselor.location}</Card.Meta>
          <Card.Description>
            {this.props.post.counselor.name} wants to talk to you
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {this.props.post.activated ? <Button basic color='green'>
            Schdeule a call</Button> :
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


  render() {

    const editForm = <PostEditForm handleClose={this.handleClose} post={this.props.post}/>

    const popupBell = (
      <Popup
        trigger={<Icon name='bell outline' />}
        content={this.counselorRequestCard()}
        on='click'
        open={this.state.isOpen}
        onClose={this.handleCloseCard}
        onOpen={this.handleOpen}
        position='bottom left'
      />)

    const pending = <Icon name='paper plane outline' />

    return (
      <div>
          <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-border-rounded">
            <h3 className="uk-card-title">Anonymous {this.props.userId === this.props.post.counselor_id ? (this.props.post.activated ? <Icon name='check circle outline'/> : pending) : null}{this.props.post.requested && this.props.role === 'student'? popupBell : null}</h3>
            <p className="uk-panel uk-panel-box uk-text-truncate">{this.props.post.content}</p>
            <div className="uk-card-footer">
              <Modal open={this.state.showModal} trigger={<a onClick={this.handleReadMore} href="#" className="uk-button uk-button-text">Read more</a>} >

                <Modal.Content image scrolling>
                  <Container>
                  <Modal.Description>
                    <Header>Age {this.props.post.student.age} {this.props.post.student.gender === 'female' ? <Icon name='venus' /> : (
                        this.props.post.student.gender === 'male' ? <Icon name='mars' /> : <Icon name='venus mars' />
                      )}
                    </Header>
                    <p>{this.props.post.content}</p>
                    {this.state.edit ? editForm : null}
                  </Modal.Description>
                </Container>
                </Modal.Content>

                <Modal.Actions>
                  {this.props.userId === this.props.post.student.id ?
                    (!this.state.edit ?
                      <div>
                      <Button className="ui red basic button" onClick={this.handleClose}>
                        Close
                      </Button>
                      <Button className="ui teal basic button" onClick={this.handleClick}>
                        Edit<Icon name='chevron right' />
                      </Button>
                      </div>
                       :
                      <Button className="ui teal basic button" onClick={this.handleClick}>
                        <Icon name='chevron left' />Cancel
                      </Button>
                    ) :
                     <div>
                       <Button className="ui red basic button" onClick={this.handleClose}>
                         Close
                       </Button>
                       {this.props.post.counselor_id === this.props.userId ? (
                         this.props.post.activated ? <Button disabled>Accepted</Button> :
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
    role: state.user.role
  }
}

export default connect(mapStateToProps, {patchPost})(PostCard)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import PostEditForm from '../components/PostEditForm'

class PostCard extends Component {

  state = {
    edit: false
  }

  handleClick = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {

    const editForm = (
      <PostEditForm post={this.props.post}/>
      // <form>
      //   <h1>Test</h1>
      //   <textarea onChange={this.changeHandler} name="content" className="uk-textarea" rows="5" placeholder="Textarea" required></textarea>
      // </form>
    )

    return (
      <div>
          <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-border-rounded">
            <h3 className="uk-card-title">Anonymous</h3>
            <p>{this.props.post.content}</p>
            <div className="uk-card-footer">
              <Modal trigger={<a href="#" className="uk-button uk-button-text">Read more</a>}>

                <Modal.Content image scrolling>
                  <Modal.Description>
                    <Header>Age {this.props.post.student.age} {this.props.post.student.gender === 'female' ? <Icon name='venus' /> : (
                        this.props.post.student.gender === 'male' ? <Icon name='mars' /> : <Icon name='venus mars' />
                      )}
                    </Header>
                    <p>{this.props.post.content}</p>
                    {this.state.edit ? editForm : null}
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  {this.props.userId === this.props.post.student.id ?
                    (!this.state.edit ?
                      <Button className="ui teal basic button" onClick={this.handleClick}>
                        Edit<Icon name='chevron right' />
                      </Button> :
                      <Button className="ui teal basic button" onClick={this.handleClick}>
                        <Icon name='chevron left' />Cancel
                      </Button>
                    )
                   :
                    <Button className="ui teal basic button">
                    Send Request<Icon name='chevron right' />
                  </Button>
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
    userId: state.user.id
  }
}

export default connect(mapStateToProps)(PostCard)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class PostCard extends Component {

  render() {
    // debugger
    return (
      <div>
          <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-border-rounded">
            <h3 className="uk-card-title">No name</h3>
            <p>{this.props.post.content}</p>
            <div className="uk-card-footer">
              <Modal trigger={<a href="#" className="uk-button uk-button-text">Read more</a>}>

                <Modal.Content image scrolling>
                  <Modal.Description>
                    <Header>Age {this.props.post.student.age} / Gender {this.props.post.student.gender}</Header>
                    <p>{this.props.post.content}</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  {this.props.userId === this.props.post.student.id ?
                    <Button primary>
                      Edit<Icon name='chevron right' />
                    </Button> :
                    <Button primary>
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

import React, { Component } from 'react'
import { Label, Badge, Button, ButtonToolbar, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import EditIcon from 'react-icons/lib/ti/pencil'
import PostCommandBar from './PostCommandBar';
import { timeConverter } from '..//util//Utils';
import FormEditPost from './FormEditPost';

class PostContent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showFormEditPost: false
    }
  }

  editPost = () => {
    this.setState({ showFormEditPost: false });
  }

  closeForm = () => {
    this.setState({ showFormEditPost: false });
  }

  render() {
    return (
      <ListGroupItem className='text-left without-padding-bottom'>
        <Row>
          <Col xs={10}>
            {this.props.showBody === false ? <a href={`/${this.props.category}/${this.props.id}`} ><h5><b>{this.props.title}</b></h5></a> :
              <h5><b>{this.props.title}</b></h5>
            }
            <p>{this.props.author} &#183; {timeConverter(this.props.timestamp)} &#183; <a href={'/' + this.props.category}><Label bsStyle='primary'>{this.props.category}</Label></a></p>
          </Col>
          <Col xs={2} >
            <Button className='edit-link' bsStyle="link" onClick={() => this.setState({ showFormEditPost: true })}><EditIcon size={21} /></Button>
          </Col>
        </Row>
        {this.props.showBody ?
          <Row className='editable-row'>
            <Col xs={12}>
              <span className='text-left wwrap2'>{this.props.body}</span>
            </Col>
          </Row>
          : ''}
        <Col xs={12} className='without-lateral-padding'>
          <hr className='half-rule' />
        </Col>

        <Row>
          <PostCommandBar {...this.props} />
        </Row>

        <FormEditPost show={this.state.showFormEditPost} editPost={this.props.editPost} close={this.closeForm} post={this.props} />

      </ListGroupItem>

    )

  }

}

export default PostContent
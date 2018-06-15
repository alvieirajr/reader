import React, { Component } from 'react';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle'
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

class FormNewPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  componentDidMount() {

  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  handleOnEnter = () => {
    this.setState({ title: '', body: '' });
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  }
  
  handleChangeBody = (e) => {
    this.setState({ body: e.target.value });
  }

  saveOperation = () => {
    if (this.state.title.trim().length > 0 && this.state.body.trim().length > 0) {
      this.props.newPost({
        title : this.state.title, 
        body : this.state.body,
        category : 'react'
      });
      this.props.close();
    }
  }

  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        onHide={this.props.close}
        onEnter={this.handleOnEnter}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup className='without-bottom-margin'>
            <FormControl type="text" placeholder='Write a title.' wrap="hard" value={this.state.title} onChange={this.handleChangeTitle} onKeyPress={this._handleKeyPress} />
            <p></p>
            <FormControl componentClass="textarea" className='text-area' type="text" placeholder='What are you thinking ?' wrap="hard" value={this.state.body} onChange={this.handleChangeBody} onKeyPress={this._handleKeyPress} />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.saveOperation}>Save</Button>
          <Button bsStyle="primary" onClick={this.props.close}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default FormNewPost;
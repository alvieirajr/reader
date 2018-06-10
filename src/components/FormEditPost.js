import React, { Component } from 'react';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle'
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

class FormEditPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  componentDidMount() {
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (this.state.value.trim().length > 0) {
        /* this.props.XXXComment({
           parentId: this.props.parentId,
           body: this.state.value
         })*/
        this.setState({ value: '' });
        console.log(this)

      }
      e.preventDefault();
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        onHide={this.props.noOperation}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup className='without-bottom-margin'>
            <FormControl componentClass="textarea" className='text-area' type="text" placeholder='Write a comment...' wrap="hard" value={this.state.value} onChange={this.handleChange} onKeyPress={this._handleKeyPress} />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.yesOperation}>Yes</Button>
          <Button bsStyle="primary" onClick={this.props.noOperation}>No</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default FormEditPost;
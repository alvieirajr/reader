import React, { Component } from 'react';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle'
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

class FormEditComment extends React.Component {

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

  onEnter = () => {
    console.log('OnEnter');
    this.setState({ value: this.props.body });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.body });
  }

  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        onHide={this.props.cancelOperation}
        onEntering={this.onEnter}
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
          <Button onClick={this.props.saveOperation}>Save</Button>
          <Button bsStyle="primary" onClick={this.props.cancelOperation}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default FormEditComment;
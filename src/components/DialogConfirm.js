import React, { Component } from 'react';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle'
import { Modal, Button } from 'react-bootstrap';

class DialogConfirmModal extends React.Component {
    render() {
      return (          
        <Modal
          {...this.props}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <p>
                <FaQuestionCircle size={32}/>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.message}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.deletePost}>Yes</Button>
            <Button bsStyle="primary" onClick={this.props.closeDialog}>No</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  export default DialogConfirmModal;
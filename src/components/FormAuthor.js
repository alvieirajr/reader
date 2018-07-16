import React, { Component } from 'react';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle'
import { MenuItem, DropdownButton, Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

class FormAuthor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      author: ''
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
    this.setState({ author: localStorage.getItem('author') });
  }

  handleChangeAuthor = (e) => {
    this.setState({ author: e.target.value });
  }

  confirmAuthor = () => {
    if (this.state.author.trim().length > 0) {
      this.props.setAuthor(this.state.author);
      this.props.close();
    }
  }  

  render() {
    console.log(this.props)
    let author = this.state.author;// localStorage.getItem('author');
    return (
      <Modal 
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"       
        onEnter={this.handleOnEnter}
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-lg">Enter your name.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup className='without-bottom-margin'>
            <FormControl type="text" placeholder={this.state.author === null ||  this.state.author === '' ? 'What\'s your name ?' : author } wrap="hard" value={author} onChange={this.handleChangeAuthor} onKeyPress={this._handleKeyPress} />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.confirmAuthor}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default FormAuthor;
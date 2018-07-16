import React, { Component } from 'react';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle'
import { MenuItem, DropdownButton, Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

class FormNewPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      category: ''
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
    this.setState({ title: '', body: '', category: '' });
    this.props.fetchCategories();
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  handleChangeBody = (e) => {
    this.setState({ body: e.target.value });
  }

  selectItem = (eventKey) => {
    this.setState({ ...this.state, category: eventKey })
  }

  saveOperation = () => {
    if (this.state.title.trim().length > 0 && this.state.body.trim().length > 0 && this.state.category !== '') {
      this.props.newPost({
        title: this.state.title,
        author: localStorage.getItem("author"),
        body: this.state.body,
        category: this.state.category
      });
      this.props.close();
    }
  }

  render() {
    let categories = this.props.categories || [{}];
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
            <p></p>
            <DropdownButton
              bsSize="default"
              title={this.state.category === '' ? "Select a category" : (this.state.category)}
              id="dropdown-size-default"
            >
              {categories !== undefined ? (
                <MenuItem eventKey='' active={this.state.category === '' ? true : false} onSelect={this.selectItem}>&nbsp;</MenuItem>
              ) : ''
              }
              {categories !== undefined ? categories.map((item, i) => {
                let isActive = (item.name === this.state.category ? true : false);
                return <MenuItem key={i} eventKey={item.name} active={isActive} onSelect={this.selectItem}>{item.name}</MenuItem>
              }) : ''
              }
            </DropdownButton>
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
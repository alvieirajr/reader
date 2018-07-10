import React, { Component } from 'react';
import { Navbar, Button, FormGroup } from 'react-bootstrap';
import FormNewPost from './FormNewPost';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewPostForm : false
        }
    }

    newPost = () => {
        this.setState({ showNewPostForm: false });
      }
    
      closeForm = () => {
        this.setState({ showNewPostForm: false });
    }

    render () {   
        return (
            <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <FormGroup>
                    <Button type="submit" onClick={() => this.setState({ showNewPostForm: true })}>New Post</Button>
                </FormGroup>
              </Navbar.Brand>
            </Navbar.Header>

            <FormNewPost categories={this.props.categories} fetchCategories={this.props.fetchCategories} show={this.state.showNewPostForm} newPost={this.props.newPost} close={this.closeForm}/>
          
            </Navbar>      
        )
    }
}

export default Header;
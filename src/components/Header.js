import React, { Component } from 'react';
import { Row, Col, Navbar, Button, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import FormNewPost from './FormNewPost';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewPostForm: false
        }
    }

    newPost = () => {
        this.setState({ showNewPostForm: false });
    }

    closeForm = () => {
        this.setState({ showNewPostForm: false });
    }

    sortPosts = (eventKey) => {
        this.setState({ sortBy : eventKey});
        this.props.sortBy(eventKey, this.props.posts)
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <FormGroup>
                                {this.props.match.path == '/' || this.props.match.path == '/:category' ?
                                    <DropdownButton

                                        title="Order by"
                                        id="dropdown-size-default"
                                        
                                    >
                                        <MenuItem eventKey='by-date' active={this.state.sortBy === 'by-date' ? true : false} onSelect={this.sortPosts}>Date</MenuItem>
                                        <MenuItem eventKey='by-score' active={this.state.sortBy === 'by-score' ? true : false} onSelect={this.sortPosts}>Score</MenuItem>
                                    </DropdownButton>
                                    : ''}
                                    {this.props.match.path == '/' ?
                                        <span>&nbsp;&nbsp;</span>
                                    : ''  }
                                    {this.props.match.path == '/' ?                                    
                                        <Button type="submit" onClick={() => this.setState({ showNewPostForm: true })}>New Post</Button>                                    
                                    : ''}
                                    {this.props.match.path == '/:category' ?
                                        <span>&nbsp;&nbsp;</span>
                                    : ''  }                                    
                                    {this.props.match.path !== '/' ?
                                        <Button type="submit" href="/">Show All</Button>
                                    : ''}
                            </FormGroup>
                        </Navbar.Brand>
                    </Navbar.Header>

                    <FormNewPost categories={this.props.categories} fetchCategories={this.props.fetchCategories} show={this.state.showNewPostForm} newPost={this.props.newPost} close={this.closeForm} />

                </Navbar>

            </div>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import { Nav, Row, Col, Navbar, Button, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import FormNewPost from './FormNewPost';
import FormAuthor from './FormAuthor';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewPostForm: false,
            showAuthorForm: false,
            listBy: ''
        }
    }

    componentDidMount() {
        this.props.fetchCategories();
        if (this.props.match.path === '/') {
            this.setState({ listBy : ''});
        }
        if (this.props.match.path === '/:category' ) {            
            this.setState({ listBy : this.props.location.pathname.slice(1)});
        }    
        console.log(this.props)   
        if (this.props.author === null) {
            this.setState({ showAuthorForm : true });
        }
    }

    newPost = () => {
        this.setState({ showNewPostForm: false });
    }

    closeForm = () => {
        this.setState({ showNewPostForm: false });
    }

    closeAuthorForm = () => {
        this.setState({ showAuthorForm: false });
    }
    
    sortPosts = (eventKey) => {
        this.setState({ sortBy: eventKey });
        this.props.sortBy(eventKey, this.props.posts)
    }

    getListByActive = (name) => {
        console.log(this.props.location.pathname)
        if (this.props.match.path === '/') {
            return false;
        }
        if (this.props.match.path === '/:category' ) {
            return this.props.location.pathname.slice === name;
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <FormGroup>
                                {this.props.match.path === '/' || this.props.match.path === '/:category' ?
                                    <DropdownButton
                                        title="Order by"
                                        id="dropdown-order-by"
                                    >
                                        <MenuItem eventKey='by-date' active={this.state.sortBy === 'by-date' ? true : false} onSelect={this.sortPosts}>Date</MenuItem>
                                        <MenuItem eventKey='by-score' active={this.state.sortBy === 'by-score' ? true : false} onSelect={this.sortPosts}>Score</MenuItem>
                                    </DropdownButton>
                                    : ''}

                                {this.props.match.path === '/' ?
                                    <span>&nbsp;&nbsp;</span>
                                    : ''}
                                {this.props.match.path === '/' ?
                                    <Button type="submit" onClick={() => this.setState({ showNewPostForm: true })}>New Post</Button>
                                    : ''}
                                {this.props.match.path === '/:category' ?
                                    <span>&nbsp;&nbsp;</span>
                                    : ''}
                                {this.props.match.path !== '/' ?
                                    <Button type="submit" href="/">Show All</Button>
                                    : ''}
                                <span>&nbsp;&nbsp;</span>
                                {this.props.categories !== undefined ?
                                    <DropdownButton
                                        title="Categories"
                                        id="dropdown-list-by"
                                    >

                                        {
                                            this.props.categories.map((item, i) => {
                                                return <MenuItem key={i} eventKey={item.name} active={item.name === this.state.listBy ? true : false } href={'/' + item.name}>{item.name}</MenuItem>
                                            })
                                        }

                                    </DropdownButton>
                                    : ''}     
                                <span>&nbsp;&nbsp;</span>
                                <Button type="submit" onClick={() => this.setState({ showAuthorForm : true })}>Username: {localStorage.getItem("author")}</Button>                                                     
                            </FormGroup>                            
                        </Navbar.Brand>
                    </Navbar.Header>

                    <FormNewPost categories={this.props.categories} fetchCategories={this.props.fetchCategories} show={this.state.showNewPostForm} newPost={this.props.newPost} close={this.closeForm} />

                    <FormAuthor backdrop='static' setAuthor={this.props.setAuthor} show={this.state.showAuthorForm} close={this.closeAuthorForm} />
                    
                </Navbar>

            </div>
        )
    }
}

export default Header;
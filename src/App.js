import React, { Component } from 'react';
import './App.css';
import { FormControl, FormGroup, Glyphicon, Button, ButtonToolbar, ButtonGroup, ListGroup, ListGroupItem, Label, Col, Row, Panel, Nav, NavItem, MenuItem, NavDropdown, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Heart from 'react-icons/lib/ti/heart'
import HeartFullIcon from 'react-icons/lib/ti/heart-full-outline'
import HeartOutline from 'react-icons/lib/ti/heart-outline'
import Comment from 'react-icons/lib/ti/messages'
import TrashIcon from 'react-icons/lib/fa/trash-o'
import EditIcon from 'react-icons/lib/ti/pencil'
import { connect } from 'react-redux';
import Post from './components/Post'
import * as PostAPI from './util/PostAPI'
import * as PostActions from './actions/PostActions';
import configureStore from './store/configureStore';

class App extends Component {

  constructor(props) {
    super(props);

  }


componentDidMount() {
  
  this.props.fetchPosts();
 
}

  render() {
    console.log(this.props);
    return (      
      
      <div className="App">        
        <Row>
          <Col xs={3} md={4} />
          <Col xs={6} md={4}>
            {this.props.posts.map((item) => 
              <Post {...item} />
            )}                      
          </Col>
          <Col xs={1} md={4} />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {  
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (posts) => dispatch(PostActions.fetchPosts())
  }
};


export default connect(mapStateToProps, mapDispatchToProps )(App)

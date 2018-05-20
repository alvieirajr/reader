import React, { Component } from 'react';

import { FormControl, FormGroup, Glyphicon, Button, ButtonToolbar, ButtonGroup, ListGroup, ListGroupItem, Label, Col, Row, Panel, Nav, NavItem, MenuItem, NavDropdown, Navbar } from 'react-bootstrap';

import { connect } from 'react-redux';
import Post from '../components/Post'
//import * as PostAPI from '../util/PostAPI'
import * as PostActions from '../actions/PostActions';
import configureStore from '../store/configureStore';

class PostDetails extends Component {

  constructor(props) {
    
    super(props);

  }


componentDidMount() {
  console.log(this.props);
  this.props.fetchPost(this.props.match.params.post_id);
}

  render() {
    console.log(this.props)

    return (
      <div>      
          <Row>
            <Col xs={3} md={4} />
            <Col xs={6} md={4}>
              { this.props.post !== undefined ? 
                <Post {...this.props.post}
                votePost={this.props.post.votePost}
                fetchComments={this.props.post.fetchComments}
                voteComment={this.props.post.voteComment} /> : "" }
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
    fetchPost: (id) => dispatch(PostActions.fetchPost(id)),
    votePost: (id, option) => dispatch(PostActions.votePost(id, option)),
    fetchComments : (id) => dispatch(PostActions.fetchComments(id)),
    voteComment: (id, option) => dispatch(PostActions.voteComment(id, option))
  }
};


export default connect(mapStateToProps, mapDispatchToProps )(PostDetails)

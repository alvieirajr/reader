import React, { Component } from 'react';

import { FormControl, FormGroup, Glyphicon, Button, ButtonToolbar, ButtonGroup, ListGroup, ListGroupItem, Label, Col, Row, Panel, Nav, NavItem, MenuItem, NavDropdown, Navbar } from 'react-bootstrap';

import { connect } from 'react-redux';
import Post from '../components/Post'
import * as PostAPI from '../util/PostAPI'
import * as PostActions from '../actions/PostActions';
import configureStore from '../store/configureStore';

class PostCollections extends Component {

  constructor(props) {
    super(props);

  }


componentDidMount() {
  console.log(this.props)

  // In case to show all posts.
  if (Object.keys(this.props.match.params).length === 0) {
    this.props.fetchPosts();
    this.showBody = false;
  } else {
    this.props.fetchPost(this.props.match.params.post_id);
    this.showBody = true;
  }

}

  render() {
    console.log(this.props)
    return (
      <div>      
          <Row>
            <Col xs={3} md={4} />
            <Col xs={6} md={4}>
              {this.props.posts.map((item) =>
                <Post {...item}
                  showBody={this.showBody}
                  votePost={this.props.votePost}
                  fetchComments={this.props.fetchComments}
                  voteComment={this.props.voteComment}
                />
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
    fetchPosts: (posts) => dispatch(PostActions.fetchPosts()),
    fetchPost: (id) => dispatch(PostActions.fetchPost(id)),    
    votePost: (id, option) => dispatch(PostActions.votePost(id, option)),
    fetchComments : (id) => dispatch(PostActions.fetchComments(id)),
    voteComment: (id, option) => dispatch(PostActions.voteComment(id, option))
  }
};


export default connect(mapStateToProps, mapDispatchToProps )(PostCollections)

import React, { Component } from 'react';

import { FormControl, FormGroup, Glyphicon, Button, ButtonToolbar, ButtonGroup, ListGroup, ListGroupItem, Label, Col, Row, Panel, Nav, NavItem, MenuItem, NavDropdown, Navbar } from 'react-bootstrap';

import { connect } from 'react-redux';
import PostItem from '../components/PostItem'
import * as PostAPI from '../util/PostAPI'
import * as PostActions from '../actions/PostActions';
import Page404 from '../components/Page404';
  
class PageSinglePost extends Component {

  constructor(props) {
    super(props);

  } 


componentDidMount() {
  console.log(this.props)

    this.props.fetchPost(this.props.match.params.post_id);
    this.showBody = true;

}

  render() {
    console.log(this.props)    
    return (
      <div>
        {this.props.status === PostActions.RETURN_OK ?      
          <Row>
            <Col xs={3} md={4} />
            <Col xs={6} md={4}>
              {this.props.posts.map((item) =>
                <PostItem {...item}
                  showBody={this.showBody}
                  votePost={this.props.votePost}
                  fetchComments={this.props.fetchComments}
                  voteComment={this.props.voteComment}
                />
              )}
            </Col>
            <Col xs={1} md={4} />
          </Row>
         : <Page404/> }

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
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


export default connect(mapStateToProps, mapDispatchToProps )(PageSinglePost)

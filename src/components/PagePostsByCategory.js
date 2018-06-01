import React, { Component } from 'react';

import { FormControl, FormGroup, Glyphicon, Button, ButtonToolbar, ButtonGroup, ListGroup, ListGroupItem, Label, Col, Row, Panel, Nav, NavItem, MenuItem, NavDropdown, Navbar } from 'react-bootstrap';

import { connect } from 'react-redux';
import PostItem from '../components/PostItem'
import * as PostAPI from '../util/PostAPI'
import * as PostActions from '../actions/PostActions';

class PagePostsByCategory extends Component {

  constructor(props) {
    super(props);

  }


componentDidMount() {
  console.log(this.props)

  // In case to show all posts.
    this.props.fetchPostsByCategory(this.props.match.params.category);
    this.showBody = false;

}

  render() {
    console.log(this.props)
    return (
      <div>      
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
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsByCategory: (category) => dispatch(PostActions.fetchPostsByCategory(category)),
    votePost: (id, option) => dispatch(PostActions.votePost(id, option)),
    fetchComments : (id) => dispatch(PostActions.fetchComments(id)),
    voteComment: (id, option) => dispatch(PostActions.voteComment(id, option))
  }
};


export default connect(mapStateToProps, mapDispatchToProps )(PagePostsByCategory)

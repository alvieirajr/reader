import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostAPI from '../util/PostAPI'
import * as PostActions from '../actions/PostActions';
import PageError from '../components/PageError';
import PostCollection from '../components/PostCollection';
import Header from '../components/Header';

class PagePostsList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <Header {...this.props}/>
        {this.props.status === PostActions.RETURN_404 ?
          <PageError title={this.props.title} menssage={this.props.menssage} showBackButton={this.props.showBackButton}/>
          : (this.props.status === PostActions.RETURN_OK ?
            <PostCollection {...this.props} showBody={false} /> : '')}
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
    votePost: (id, option) => dispatch(PostActions.votePost(id, option)),
    fetchComments: (id) => dispatch(PostActions.fetchComments(id)),
    voteComment: (id, option) => dispatch(PostActions.voteComment(id, option)),
    deletePost: (id) => dispatch(PostActions.deletePost(id)),
    deleteComment: (id) => dispatch(PostActions.deleteComment(id)),
    createComment: (params) => dispatch(PostActions.createComment(params)),
    editComment: (id, body) => dispatch(PostActions.editComment(id, body)),
    editPost: (post) => dispatch(PostActions.editPost(post)),
    newPost: (post) => dispatch(PostActions.newPost(post)),
    fetchCategories: () => dispatch(PostActions.fetchCategories())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PagePostsList)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostAPI from '../util/PostAPI'
import * as PostActions from '../actions/PostActions';
import PageError from '../components/PageError';
import PostCollection from '../components/PostCollection';
import Header from '../components/Header';

class PagePostsByCategory extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPostsByCategory(this.props.match.params.category);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.status === PostActions.RETURN_OK ?
          <Header {...this.props} /> : ''}
        {this.props.status === PostActions.RETURN_404 ?
          <PageError title={this.props.title} menssage={this.props.menssage} showBackButton={this.props.showBackButton} />
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
    fetchPostsByCategory: (category) => dispatch(PostActions.fetchPostsByCategory(category)),
    votePost: (id, option) => dispatch(PostActions.votePost(id, option)),
    fetchComments: (id) => dispatch(PostActions.fetchComments(id)),
    voteComment: (id, option) => dispatch(PostActions.voteComment(id, option)),
    deletePost: (id) => dispatch(PostActions.deletePost(id)),
    deleteComment: (id) => dispatch(PostActions.deleteComment(id)),
    createComment: (params) => dispatch(PostActions.createComment(params)),
    editComment: (id, body) => dispatch(PostActions.editComment(id, body)),
    editPost: (post) => dispatch(PostActions.editPost(post)),
    newPost: (post) => dispatch(PostActions.newPost(post)),
    fetchCategories: () => dispatch(PostActions.fetchCategories()),
    sortBy: (sortMode, posts) => dispatch(PostActions.sortBy(sortMode, posts)),
    setAuthor: (name) => dispatch(PostActions.setAuthor(name))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePostsByCategory)
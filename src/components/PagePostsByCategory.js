import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostAPI from '../util/PostAPI'
import * as PostActions from '../actions/PostActions';
import PageError from '../components/PageError';
import PostCollection from '../components/PostCollection';

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
    fetchPostsByCategory: (category) => dispatch(PostActions.fetchPostsByCategory(category)),
    votePost: (id, option) => dispatch(PostActions.votePost(id, option)),
    fetchComments: (id) => dispatch(PostActions.fetchComments(id)),
    voteComment: (id, option) => dispatch(PostActions.voteComment(id, option)),
    deletePost: (id) => dispatch(PostActions.deletePost(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePostsByCategory)
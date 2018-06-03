import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostAPI from '../util/PostAPI'
import * as PostActions from '../actions/PostActions';
import Page404 from '../components/Page404';
import PostCollection from '../components/PostCollection';

class PageSinglePost extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.post_id);
  }

  render() {
    return (
      <div>
        {this.props.status === PostActions.RETURN_404 ?
          <Page404 />
          : (this.props.status === PostActions.RETURN_OK ?
            <PostCollection {...this.props} showBody={true}/> : '')}
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
    fetchComments: (id) => dispatch(PostActions.fetchComments(id)),
    voteComment: (id, option) => dispatch(PostActions.voteComment(id, option))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(PageSinglePost)

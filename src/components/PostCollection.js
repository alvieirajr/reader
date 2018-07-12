import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import PostItem from '../components/PostItem'

function PostCollection(props) {
  return (    
    <Row>
      <Col xs={3} md={4} />
      <Col xs={6} md={4}>
        {props.posts.map((item) =>
          <PostItem  key={item.id} 
            {...item}
            showBody={props.showBody}
            votePost={props.votePost}
            fetchComments={props.fetchComments}
            voteComment={props.voteComment}
            deletePost={props.deletePost}
            deleteComment={props.deleteComment}
            createComment={props.createComment}
            editComment={props.editComment}
            editPost={props.editPost}
            newPost={props.newPost}
            fetchCategories={props.fetchCategories}
          />
        )}
      </Col>
      <Col xs={1} md={4} />
    </Row>
  );
}

export default PostCollection;
import React, { Component } from 'react';
import { Badge, Button, ButtonToolbar, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

import HeartFullIcon from 'react-icons/lib/ti/heart-full-outline'
import HeartOutline from 'react-icons/lib/ti/heart-outline'
import CommentIcon from 'react-icons/lib/ti/messages'
import TrashIcon from 'react-icons/lib/ti/trash'
import EditIcon from 'react-icons/lib/ti/pencil'

import PostBody from './PostBody'
import InputText from './InputText'
import PostComment from './PostComment'
import PostSummary from './PostSummary'

import IconThumbsDown from 'react-icons/lib/fa/thumbs-down'
import IconThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import IconThumbsUp from 'react-icons/lib/fa/thumbs-up'
import IconThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'
import { connect } from 'react-redux';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts : []
    }
  }
/*
  state = {
    timestamp : 'Há 9h',
    title : 'O que eu penso sobre isso?',
    body : 'klajsdklas jdlka sjdklajsdjlkjlk alskdjaklsj aksldjl aksd aklsjkjas alskj',
    author : 'Thiago Antunes',
    category: 'science',    
    voteScore : -2,
    commentCount : 0,
    vote : -1,
    canIRemove : false,    
  }
*/
    render() {
//console.log(this)
        return(
            <ListGroup>              
   
              <PostBody {...this.props} />            
              <PostSummary {...this.props} />                              
              {this.props.showComments == true ? <PostComment/> : ''}   
          </ListGroup>          

        );
    }
} 

export default Post;

/*
const mapStateToProps = (state) => {
  console.log(state)
  return {
      posts: state.posts
  }
}


export default connect(mapStateToProps)(Post)
*/

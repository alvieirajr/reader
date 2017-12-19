import React, { Component } from 'react';
import { Badge, Button, ButtonToolbar, Col, Row, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

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

function Post(props)  {
    console.log(props);
    return(
        <div>   
        <ListGroup>  
        <PostBody {...props} />
        <PostSummary {...props} />                              
        {props.showComments === true ? props.comments.map(item => {             
            return <PostComment {...item} voteComment={props.voteComment} />
        }) : <p>s</p>}
        </ListGroup>
        </div>    
    );
} 

export default Post;
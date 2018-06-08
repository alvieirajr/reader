import React, { Component } from 'react';
import { Row, Col, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap'

import HeartFullIcon from 'react-icons/lib/ti/heart-full-outline'
import HeartOutline from 'react-icons/lib/ti/heart-outline'
import CommentIcon from 'react-icons/lib/ti/messages'
import TrashIcon from 'react-icons/lib/ti/trash'
import EditIcon from 'react-icons/lib/ti/pencil'

import IconThumbsDown from 'react-icons/lib/fa/thumbs-down'
import IconThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import IconThumbsUp from 'react-icons/lib/fa/thumbs-up'
import IconThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'

import PostCommandBar from './PostCommandBar'
import { voteComment } from '../actions/PostActions';

import PostCommentFooter from './PostCommentFooter';
import { timeConverter } from '..//util//Utils';

function PostComment(props) {
        console.log(props)
        return (
               
                <ListGroupItem className='text-left small-padding-bottom bg-gray'>
                    <Row>
                        <Col xs={10} >
                            <p><b>{props.author}</b> &#183; {timeConverter(props.timestamp)}</p>
                        </Col>     
                        <Col xs={2}>
                        <Button className='edit-link' bsStyle="link"><EditIcon size={21} /></Button>
                    </Col>                           
                    </Row>  
                    <Row>
                        <Col xs={12} className='wwrap2'>
                            {props.body}   
                        </Col>
                    </Row> 
                    <Col xs={12} className='without-lateral-padding'>
                    <hr className='half-rule' />
                </Col>           
                    <Row>
                        <PostCommentFooter id={props.id} voteScore={props.voteScore} voteComment = {props.voteComment} deleteComment={props.deleteComment}/>
                    </Row>                                  
                </ListGroupItem>
      
            
        )
}


export default PostComment;
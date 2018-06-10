import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import PostContent from './PostContent';
import PostComment from './PostComment'
import PostSummary from './PostSummary'
import InputText from './InputText'
import { connect } from 'react-redux';

function PostItem(props) {
    //console.log(props)
    return (        
        <div>
            <ListGroup>
                <PostContent {...props} />
                <PostSummary {...props} />
                {props.showComments === true ? props.comments.map(item => {
                    return <PostComment {...item} voteComment={props.voteComment} editComment={props.editComment} deleteComment={props.deleteComment}/>
                }) : ''}
                {props.showComments === true ? <InputText createComment={props.createComment} parentId={props.id} /> : ''}
            </ListGroup>
        </div>
    );
}

export default PostItem;
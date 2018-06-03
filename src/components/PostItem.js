import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import PostContent from './PostContent';
import InputText from './InputText'
import PostComment from './PostComment'
import PostSummary from './PostSummary'
import { connect } from 'react-redux';

function PostItem(props) {
    return (
        <div>
            <ListGroup>
                <PostContent {...props} />
                <PostSummary {...props} />
                {props.showComments === true ? props.comments.map(item => {
                    return <PostComment {...item} voteComment={props.voteComment} />
                }) : ''}
            </ListGroup>
        </div>
    );
}

export default PostItem;
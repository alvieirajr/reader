import React, { Component } from 'react';
import { Col, ButtonToolbar, Button } from 'react-bootstrap'
import CommentIcon from 'react-icons/lib/ti/messages'
import TrashIcon from 'react-icons/lib/ti/trash'

import IconThumbsDown from 'react-icons/lib/fa/thumbs-down'
import IconThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import IconThumbsUp from 'react-icons/lib/fa/thumbs-up'
import IconThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'

import { connect } from 'react-redux';
import * as PostActions from '../actions/PostActions';
import { fetchComments } from '../actions/PostActions';

class PostCommandBar extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    toggleVoteUp = () => {
        this.props.votePost(this.props.id, 'upVote');
    }

    toggleVoteDown = () => {
        this.props.votePost(this.props.id, 'downVote');
    }

    showComments = (post_id) => {
        this.props.fetchComments(this.props.id);
    }

    deletePost = () => {
        console.log('ss');
        this.props.deletePost(this.props.id);
        this.props.history.push("/")
    }

    render() {
        //   console.log(this.props);
        return (
            <div>
                <Col xs={4} >
                    <ButtonToolbar >
                        <Button className='without-h-padding' bsStyle="link" onClick={this.toggleVoteUp}>
                            <IconThumbsOUp size={18} />
                        </Button>
                        <Button className='without-h-padding' bsStyle="link">
                            &nbsp;{this.props.voteScore}&nbsp;
                            </Button>
                        <Button className='without-h-padding' bsStyle="link" onClick={this.toggleVoteDown}>
                            <IconThumbsODown size={18} />
                        </Button>
                    </ButtonToolbar>
                </Col>
                <Col xs={4} className='' >
                    <ButtonToolbar>
                        <Button className='' bsStyle="link" onClick={() => this.showComments(this.props.id)}><CommentIcon size={18} /> Comments </Button>
                    </ButtonToolbar>
                </Col>
                <Col xs={4} className=''>
                    <ButtonToolbar>
                        <Button className='' bsStyle="link" onClick={this.deletePost}><TrashIcon size={18} />Remove</Button>
                    </ButtonToolbar>
                </Col>
            </div>
        )

    }
}

export default PostCommandBar;


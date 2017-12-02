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


class PostCommandBar extends Component { 
    
    constructor(props) {
        super(props);   
    
    }

    componentDidMount() {
        this.setState( {
            ...this.props,
        })      
    }

    toggleVoteUp = () => {        
        this.props.votePost(this.props.id, 'upVote');        
    }
    
    toggleVoteDown = () => {
        this.props.votePost(this.props.id, 'downVote');   
    }    

    render() {
        if (this.state) {
            return (
            <div>               
                <Col xs={4} >
                    <ButtonToolbar >                                        
                        <Button className='without-h-padding'  bsStyle="link" onClick={this.toggleVoteUp}>  
                            <IconThumbsOUp size={18} />
                            </Button>
                            <Button className='without-h-padding'  bsStyle="link"> 
                            &nbsp;{this.props.voteScore}&nbsp;
                            </Button>
                            <Button className='without-h-padding' bsStyle="link" onClick={this.toggleVoteDown}> 
                            <IconThumbsODown size={18} /> 
                            </Button>
                    </ButtonToolbar>
                </Col>                
                <Col xs={4} className='' >
                    <ButtonToolbar>
                        <Button className='' bsStyle="link"><CommentIcon size={18} /> Comments </Button>
                    </ButtonToolbar>                
                </Col>
                <Col xs={4} className=''>        
                    <ButtonToolbar>
                        <Button className='' bsStyle="link"><TrashIcon size={18} />Remove</Button>            
                    </ButtonToolbar>
                </Col>      
            </div>)
        } else { 
            return (
                <div></div>
            )
        }                
    }
}

const mapStateToProps = (state) => {
    return state;
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        votePost: (id, option) => dispatch(PostActions.votePost(id, option))
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps )(PostCommandBar)


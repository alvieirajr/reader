import React, { Component } from 'react';
import { Col, ButtonToolbar, Button } from 'react-bootstrap'
import CommentIcon from 'react-icons/lib/ti/messages'
import TrashIcon from 'react-icons/lib/ti/trash'

import IconThumbsDown from 'react-icons/lib/fa/thumbs-down'
import IconThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import IconThumbsUp from 'react-icons/lib/fa/thumbs-up'
import IconThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'

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
        this.setState ({
            voteScore : this.state.voteScore + 1
        })
    }
    
    toggleVoteDown = () => {
        this.setState ({
            voteScore : this.state.voteScore - 1
        })
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
                            &nbsp;{this.state.voteScore}&nbsp;
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

export default PostCommandBar;
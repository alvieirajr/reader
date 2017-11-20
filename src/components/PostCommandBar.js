import React, { Component } from 'react';
import { Col, ButtonToolbar, Button } from 'react-bootstrap'
import CommentIcon from 'react-icons/lib/ti/messages'
import TrashIcon from 'react-icons/lib/ti/trash'

import IconThumbsDown from 'react-icons/lib/fa/thumbs-down'
import IconThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import IconThumbsUp from 'react-icons/lib/fa/thumbs-up'
import IconThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'

class PostCommandBar extends Component { 

    state = {
        timestamp : 'Há 9h',
        title : 'O que eu penso sobre isso?',
        body : 'klajsdklas jdlka sjdklajsdjlkjlk alskdjaklsj aksldjl aksd aklsjkjas alskj',
        author : 'Thiago Antunes',
        category: 'science',    
        voteScore : 4,
        commentCount : 0,
        vote : 0,
        canIRemove : false
      }

    toggleVoteUp = () => {
        console.log(this.state.voteScore);
        this.setState ({
                vote : this.state.vote > 0 ? 0 : 1,
                voteScore : (this.state.voteScore) + (this.state.vote+1 == 0 ? 2 : this.state.vote+1 == 1 ? 1 : -1),
            })
    }
    
    toggleVoteDown = () => {
        console.log(this.state.voteScore + this.state.vote);
        this.setState ({
                vote : this.state.vote < 0 ? 0 : -1,
                voteScore : this.state.voteScore + (this.state.vote-1 == 0 ? -2 : this.state.vote-1 == -1 ? -1 : 1),
            })
        }    

    render() {

        return (
            <div>
                <Col xs={4} >
                    <ButtonToolbar >                    
                    
                        <Button className='without-h-padding'  bsStyle="link" onClick={this.toggleVoteUp}>  
                            { ((this.state.vote <= 0)) ?  <IconThumbsOUp size={18} /> : <IconThumbsUp size={18} />}
                            </Button>
                            <Button className='without-h-padding'  bsStyle="link"> 
                            &nbsp;{this.state.voteScore}&nbsp;
                            </Button>
                            <Button className='without-h-padding' bsStyle="link" onClick={this.toggleVoteDown}> 
                            { ((this.state.vote >= 0)) ? <IconThumbsODown size={18} /> : <IconThumbsDown size={18} />}                    
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
            </div>
            
        )
    }
}

export default PostCommandBar;
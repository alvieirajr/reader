import React, { Component } from 'react'
import { Label, Badge, Button, ButtonToolbar, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import EditIcon from 'react-icons/lib/ti/pencil'
import PostCommandBar from './PostCommandBar'

class PostBody extends Component { 

    state = {
        timestamp : 'Há 9h',
        title : 'O que eu penso sobre isso?',
        body : 'klajsdklas jdlka sjdklajsdjlkjlk alskdjaklsj aksldjl aksd aklsjkjas alskj',
        author : 'Thiago Antunes',
        category: 'science',    
        voteScore : -2,
        commentCount : 0,
        vote : -1,
        canIRemove : false
      }


    render() {
        return(
            <ListGroupItem className='text-left without-padding-bottom'>
            <Row>
              <Col xs={10} >
                <p><b>{this.state.author}</b> &#183; <Label  bsStyle='primary'>{this.state.category}</Label> &#183;  {this.state.timestamp}</p>
              </Col>
              <Col xs={2} className=''>
              <Button className='edit-link' bsStyle="link"><EditIcon size={21} /></Button>
              </Col>
            </Row>
            <Row className="editable-row">
              <Col xs={12} >
                <span className='text-left'>{this.state.body}</span>                    
              </Col>
            </Row>
            <Col xs={12} className='without-lateral-padding'>
            <hr className='half-rule' />
            </Col>
            <Row>
            </Row>              
            <Row>
              <PostCommandBar/>
            </Row>
          </ListGroupItem>    
        )
    }
}

export default PostBody
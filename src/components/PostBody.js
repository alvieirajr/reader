import React, { Component } from 'react'
import { Label, Badge, Button, ButtonToolbar, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import EditIcon from 'react-icons/lib/ti/pencil'
import PostCommandBar from './PostCommandBar'

class PostBody extends Component { 

  constructor(props) {
    super(props); 
  }

    render() {
        return(
            <ListGroupItem className='text-left without-padding-bottom'>
            
            <Row>
              <Col xs={10} >
                <p><b>{this.props.author}</b> &#183; <Label  bsStyle='primary'>{this.props.category}</Label> &#183;  {this.props.timestamp}</p>
              </Col>
              <Col xs={2} className=''>
              <Button className='edit-link' bsStyle="link"><EditIcon size={21} /></Button>
              </Col>
            </Row>
            <Row className="editable-row">
              <Col xs={12} >
                <span className='text-left'>{this.props.body}</span>                    
              </Col>
            </Row>
            <Col xs={12} className='without-lateral-padding'>
            <hr className='half-rule' />
            </Col>
            <Row>
            </Row>              
            <Row>
              <PostCommandBar {...this.props}/>
            </Row>
          </ListGroupItem>    
        )
    }
}

export default PostBody
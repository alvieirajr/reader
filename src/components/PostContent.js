import React, { Component } from 'react'
import { Label, Badge, Button, ButtonToolbar, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import EditIcon from 'react-icons/lib/ti/pencil'
import PostCommandBar from './PostCommandBar';

function PostContent(props) {
  console.log(props)
        return(            
            <ListGroupItem className='text-left without-padding-bottom'>
              <Row>
                <Col xs={10}>
                {props.showBody == false? <a href={`/${props.category}/${props.id}`} ><h5><b>{props.title}</b></h5></a> :  
                <h5><b>{props.title}</b></h5>
                }
                  <p>{props.author} &#183; {props.timestamp} &#183; <Label  bsStyle='primary'>{props.category}</Label></p>
               </Col>
               <Col xs={2} >
                <Button className='edit-link' bsStyle="link"><EditIcon size={21} /></Button>
              </Col>
              </Row>
              {props.showBody ?
              <Row className='editable-row'>
                <Col xs={12} >
                    <span className='text-left'>{props.body}</span>                 
                </Col>
              </Row>
              : ''}
              <Col xs={12} className='without-lateral-padding'>
                  <hr className='half-rule' />
              </Col>
              
              <Row>
                <PostCommandBar {...props}/>
              </Row>
            
          </ListGroupItem>    

        )

}

export default PostContent
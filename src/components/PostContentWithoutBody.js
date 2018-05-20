import React, { Component } from 'react'
import { Label, Badge, Button, ButtonToolbar, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import EditIcon from 'react-icons/lib/ti/pencil'
import PostCommandBar from './PostCommandBar'
import { timeConverter } from '../actions/PostActions';
import { Link } from 'react-router-dom';

function PostBody(props) {
  console.log(props)
        return(            
            <ListGroupItem className='text-left without-padding-bottom'>
              <Row>
                <Col xs={10}>
                <h5><b><Link to={`/${props.category}/${props.id}`}>{props.title}</Link></b></h5>
                <p>{props.author} &#183; {timeConverter(props.timestamp)} &#183; <Label  bsStyle='primary'>{props.category}</Label></p>
               </Col>
               <Col xs={2} >
                <Button className='edit-link' bsStyle="link"><EditIcon size={21} /></Button>
              </Col>
              </Row>
              
              <Col xs={12} className='without-lateral-padding'>
                  <hr className='half-rule' />
              </Col>
              
              <Row>
                <PostCommandBar {...props}/>
              </Row>
            
          </ListGroupItem>    

        )

}

export default PostBody
import React, { Component } from 'react';
import { Row, Col, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap'

import HeartFullIcon from 'react-icons/lib/ti/heart-full-outline'
import HeartOutline from 'react-icons/lib/ti/heart-outline'
import CommentIcon from 'react-icons/lib/ti/messages'
import TrashIcon from 'react-icons/lib/ti/trash'
import EditIcon from 'react-icons/lib/ti/pencil'

import IconThumbsDown from 'react-icons/lib/fa/thumbs-down'
import IconThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import IconThumbsUp from 'react-icons/lib/fa/thumbs-up'
import IconThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'


import PostCommandBar from './PostCommandBar'



import InputText from './InputText'

class PostComment extends Component { 
    render () {
        return (
            <ListGroupItem className='text-left small-padding-bottom bg-gray'>
                <Row>
                    <Col xs={10} >
                        <b>Paulo Figueira</b> &#183; Há 1h &#183; Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn                
                    </Col>
                    <Col xs={2}>
                        <Button className='edit-link' bsStyle="link"><EditIcon size={21} /></Button>
                    </Col>                
                </Row>
                <Row>
                    <PostCommandBar/>                                
                </Row>

                
              
              
            </ListGroupItem>
            
        )
    }
}


export default PostComment;
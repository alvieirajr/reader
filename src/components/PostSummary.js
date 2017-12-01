import React, { Component } from 'react'
import CommentIcon from 'react-icons/lib/ti/messages'
import TrashIcon from 'react-icons/lib/ti/trash'
import EditIcon from 'react-icons/lib/ti/pencil'

import { ListGroupItem, Row, Col } from 'react-bootstrap'

function PostSummary (props) {    
    return (
        <ListGroupItem className='bg-gray without-v-padding '>
            <Row className='footer'> 
                <Col xs={6} className='text-left '>
                    <span className='text-black'> <CommentIcon size={16} /> {props.commentCount} </span>
                </Col>
                <Col xs={6} className='text-right'>
                {/*}  <span className='text-black'><EditIcon size={18} /></span>
                <span className='text-black'> <TrashIcon size={18} /> </span> 
                */}
                </Col>
            </Row>                    
        </ListGroupItem>            
    )
}

export default PostSummary;
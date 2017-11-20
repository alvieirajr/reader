import React, { Component } from 'react'
import { ListGroupItem, FormGroup, FormControl } from 'react-bootstrap'

class InputText extends Component {
    render() {
        return (
            <ListGroupItem className='box-small-padding bg-gray'>
                <FormGroup className='without-bottom-margin'>
                    <FormControl type="text" placeholder='Write a comment...' />
                </FormGroup>
            </ListGroupItem>
        )
    }
}

export default InputText;
import React, { Component } from 'react'
import { ListGroupItem, FormGroup, FormControl } from 'react-bootstrap';


class InputText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    componentDidMount() {
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (this.state.value.length > 0) {
                this.props.createComment({
                    parentId: this.props.parentId,
                    body: this.state.value
                })
                this.setState({ value: '' });

            }
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {

        return (
            <ListGroupItem className='box-small-padding bg-gray'>
                <FormGroup className='without-bottom-margin'>
                    <FormControl type="text" placeholder='Write a comment...' wrap="hard" value={this.state.value} onChange={this.handleChange} onKeyPress={this._handleKeyPress} />
                </FormGroup>
            </ListGroupItem>
        )
    }

}

export default InputText;
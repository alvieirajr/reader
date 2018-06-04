import React, { Component } from 'react';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap'

function PageError(props) {
    return (
        <Row>
            <Col xs={2}/>
            <Col xs={8}>
            <Jumbotron>
                <h2>{props.title === undefined ? '404 Error!' : props.title}</h2>
                <p>
                    {props.menssage === undefined ? 'Ops... The page you were looking not be found.' : props.menssage}
                </p>
                <p>
                   {props.showBackButton !== false ? <Button bsStyle="primary">Go to Posts List</Button> : ''}
                </p>                
            </Jumbotron>
            </Col>
            <Col xs={2}/>
        </Row>
    )
}

export default PageError;
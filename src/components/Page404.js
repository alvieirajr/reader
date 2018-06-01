import React, { Component } from 'react';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap'

function Page404(props) {
    return (
        <Row>
            <Col xs={2}/>
            <Col xs={8}>
            <Jumbotron>
                <h1>404 Error!</h1>
                <p>
                    Ops... The page you were looking not be found. 
                </p>
                <p>
                    <Button bsStyle="primary">Go to Posts List</Button>
                </p>                
            </Jumbotron>
            </Col>
            <Col xs={2}/>
        </Row>
    )
}

export default Page404;
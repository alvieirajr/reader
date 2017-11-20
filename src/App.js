import React, { Component } from 'react';
import './App.css';
import { FormControl, FormGroup, Glyphicon, Button, ButtonToolbar, ButtonGroup, ListGroup, ListGroupItem, Label, Col, Row, Panel, Nav, NavItem, MenuItem, NavDropdown, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Heart from 'react-icons/lib/ti/heart'
import HeartFullIcon from 'react-icons/lib/ti/heart-full-outline'
import HeartOutline from 'react-icons/lib/ti/heart-outline'
import Comment from 'react-icons/lib/ti/messages'
import TrashIcon from 'react-icons/lib/fa/trash-o'
import EditIcon from 'react-icons/lib/ti/pencil'

import Post from './components/Post'

class App extends Component {

  render() {
    return (
      <div className="App">

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Reader</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>



        <Row>
          <Col xs={3} md={4} />
          <Col xs={6} md={4}>

            <Post/>

            <ListGroup>
              <ListGroupItem className='text-left without-padding-bottom'>
                <Row>
                  <Col xs={10} >
                    <p><b>Alexandre Garcia</b> &#183; 9h</p>
                  </Col>
                  <Col xs={2} className='text-right'>
                  <Button className='edit-link' bsStyle="link"><EditIcon size={21} /></Button>                    
                  </Col>
                </Row>
                <Row className="editable-row">
                  <Col xs={12} >
                    <span className='text-left'>Conteudo do cos,mfndswe  rwerewrwerewrwer,mfns,dmfn,mn</span>                    
                  </Col>
                </Row>
                <Col xs={12} className='without-lateral-padding'>
                <hr className='half-rule' />
                </Col>
                <Row>
                </Row>
                <Row>
                  <Col xs={8} >
                    <ButtonToolbar >
                      <Button className='without-padding-left' bsStyle="link"><HeartOutline size={21} /> Vote</Button>
                      <Button bsStyle="link"><Comment size={21} /> Comments</Button>
                    </ButtonToolbar>
                  </Col>
                  <Col xs={4} className='text-right'>
                    <Button className='without-padding-right' bsStyle="link"><TrashIcon size={21} />Remove</Button>
                  </Col>
                </Row>
              </ListGroupItem>
                  <ListGroupItem className='bg-gray without-v-padding '>
                  <Row>
                    <Col xs={12} className='text-left footer'>
                      <span className='text-black without-h-padding' ><HeartFullIcon size={16} /> 22 </span>
                      <span className='text-black' >&nbsp;&nbsp;<Comment size={16} /> 22 </span>
                    </Col>
                  </Row>                    
                  </ListGroupItem>
             

            </ListGroup>


            <ListGroup>
              <ListGroupItem className='text-left without-padding-bottom'>
                <p><b>Alexandre Garcia</b></p>
                <span className='text-left'>Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn</span>
                <hr className='half-rule' />

                <ButtonToolbar >
                  <Button className='without-padding-left' bsStyle="link"><HeartOutline size={21} /> Vote</Button>
                  <Button bsStyle="link"><Comment size={21} /> Comment</Button>
                </ButtonToolbar>
              </ListGroupItem>

              <ListGroupItem className='bg-gray without-v-padding '>
              <Row>
                <Col xs={12} className='text-left footer'>
                  <span className='text-black without-h-padding'><HeartFullIcon size={16} /> 22 </span>
                  <span className='text-black' >&nbsp;&nbsp;<Comment size={16} /> 22 </span>
                </Col>
              </Row>                    
              </ListGroupItem>              
              
              <ListGroupItem className='box-small-padding bg-gray'>
                <FormGroup className='without-bottom-margin'>
                  <FormControl type="text" placeholder='Write a comment...' />
                </FormGroup>

              </ListGroupItem>
            </ListGroup>



            <ListGroup>
              <ListGroupItem className='text-left without-padding-bottom'>
                <p><b>Alexandre Garcia</b></p>
                <span className='text-left'>Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn</span>
                <hr className='half-rule' />
                <ButtonToolbar >
                  <Button className='without-padding-left' bsStyle="link"><HeartOutline size={21} /> Vote</Button>
                  <Button bsStyle="link"><Comment size={21} /> Comment</Button>
                </ButtonToolbar>
              </ListGroupItem>
              <ListGroupItem className='box-small-padding bg-gray'>
                <FormGroup className='without-bottom-margin'>
                  <FormControl type="text" placeholder='Write a comment...' />
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem className='text-left small-padding-bottom bg-gray'>
                <b>Paulo Figueira</b> - Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn                
                <ButtonToolbar >
                  <Button className='without-padding-left' bsSize="xsmall" bsStyle="link"><HeartOutline size={16} /> Vote</Button>
                  <Button bsSize="xsmall" bsStyle="link"><Comment size={16} /> Reply</Button>
                </ButtonToolbar>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem className='text-left without-padding-bottom'>
                <p><b>Alexandre Garcia</b></p>
                <span className='text-left'>Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn</span>
                <hr className='half-rule' />
                <ButtonToolbar >
                  <Button className='without-padding-left' bsStyle="link"><HeartOutline size={21} /> Vote</Button>
                  <Button bsStyle="link"><Comment size={21} /> Comment</Button>
                </ButtonToolbar>
              </ListGroupItem>
              <ListGroupItem className='box-small-padding bg-gray'>
                <FormGroup className='without-bottom-margin'>
                  <FormControl type="text" placeholder='Write a comment...' />
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem className='text-left small-padding-bottom bg-gray'>
                <b>Paulo Figueira</b> - Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn
                <ButtonToolbar >
                  <Button className='without-padding-left' bsSize="xsmall" bsStyle="link"><HeartOutline size={16} /> Vote</Button>
                  <Button bsSize="xsmall" bsStyle="link"><Comment size={16} /> Reply</Button>
                </ButtonToolbar>


                <ListGroupItem className='box-small-padding bg-gray border-reply'>
                  <FormGroup className='without-bottom-margin'>
                    <FormControl type="text" placeholder='Write a comment...' />
                  </FormGroup>
                </ListGroupItem>

              </ListGroupItem>
            </ListGroup>


            <ListGroup>
              <ListGroupItem className='text-left without-padding-bottom'>
                <p><b>Alexandre Garcia</b></p>
                <span className='text-left'>Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn</span>
                <hr className='half-rule' />
                <ButtonToolbar >
                  <Button className='without-padding-left' bsStyle="link"><HeartOutline size={21} /> Vote</Button>
                  <Button bsStyle="link"><Comment size={21} /> Comment</Button>
                </ButtonToolbar>
              </ListGroupItem>
              <ListGroupItem className='box-small-padding bg-gray'>
                <FormGroup className='without-bottom-margin'>
                  <FormControl type="text" placeholder='Write a comment...' />
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem className='text-left small-padding-bottom bg-gray'>
                <b>Paulo Figueira</b> - Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn
    <ButtonToolbar >
                  <Button className='without-padding-left' bsSize="xsmall" bsStyle="link"><HeartOutline size={16} /> Vote</Button>
                  <Button bsSize="xsmall" bsStyle="link"><Comment size={16} /> Reply</Button>
                </ButtonToolbar>

                <ListGroupItem className='text-left  bg-gray border-reply'>
                  <b>Julianaa</b> - Isso é um replly
  <ButtonToolbar >
                    <Button className='without-padding-left' bsSize="xsmall" bsStyle="link"><HeartOutline size={16} /> Vote</Button>
                    <Button bsSize="xsmall" bsStyle="link"><Comment size={16} /> Reply</Button>
                  </ButtonToolbar>
                </ListGroupItem>
              </ListGroupItem>
            </ListGroup>


            <ListGroup>
              <ListGroupItem className='text-left without-padding-bottom'>
                <p><b>Alexandre Garcia</b></p>
                <span className='text-left'>Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn</span>
                <hr className='half-rule' />
                <ButtonToolbar >
                  <Button className='without-padding-left' bsStyle="link"><HeartOutline size={21} /> Vote</Button>
                  <Button bsStyle="link"><Comment size={21} /> Comment</Button>
                </ButtonToolbar>
              </ListGroupItem>
              <ListGroupItem className='box-small-padding bg-gray'>
                <FormGroup className='without-bottom-margin'>
                  <FormControl type="text" placeholder='Write a comment...' />
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem className='text-left small-padding-bottom bg-gray'>
                <b>Paulo Figueira</b> - Conteudo do comentario fica aqui fdsfdsfsdfdsfmdsmfnsdm,fnds,mfnds,mfns,dmfn,mn
  <ButtonToolbar >
                  <Button className='without-padding-left' bsSize="xsmall" bsStyle="link"><HeartOutline size={16} /> Vote</Button>
                  <Button bsSize="xsmall" bsStyle="link"><Comment size={16} /> Reply</Button>
                </ButtonToolbar>

                <ListGroupItem className='text-left  bg-gray border-reply'>
                  <b>Julianaa</b> - Isso é um replly
<ButtonToolbar >
                    <Button className='without-padding-left' bsSize="xsmall" bsStyle="link"><HeartOutline size={16} /> Vote</Button>
                    <Button bsSize="xsmall" bsStyle="link"><Comment size={16} /> Reply</Button>
                  </ButtonToolbar>
                  <ListGroupItem className='text-left  bg-gray border-reply'>
                    <b>Julianaa</b> - Isso é um replly
<ButtonToolbar >
                      <Button className='without-padding-left' bsSize="xsmall" bsStyle="link"><HeartOutline size={16} /> Vote</Button>
                      <Button bsSize="xsmall" bsStyle="link"><Comment size={16} /> Reply</Button>
                    </ButtonToolbar>
                  </ListGroupItem>
                </ListGroupItem>
              </ListGroupItem>
            </ListGroup>



            <Panel header="Panel header" footer="sskljlweks">
              Panel content 2
        </Panel>

          </Col>

          <Col xs={1} md={4} />

        </Row>





      </div>
    );
  }
}

export default App;

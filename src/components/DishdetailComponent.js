import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

import { LocalForm, Control, Errors } from 'react-redux-form';

function RenderDish({dish}) {
    if(dish != null) {
        return (
            <div className = 'col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

function RenderComments({comments}) {
    if(comments != null) {
        return (
            <div className = 'col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key = {comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        )
                    })}
                </ul>
                <CommentForm />
            </div>
        )
    } else {
        return(<div></div>)
    }
}

const DishDetail = (props) => {
    if(props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
                <br/>
            </div>
        );
    } else {
        return (<div></div>)
    }
}

// Add Comment Modal

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleAddComment(values) {
        //this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Button outline color="secondary" onClick={this.toggle}><i className="fa fa-pencil fa-lg"></i> Submit Comment</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}><b>Submit Comment</b></ModalHeader>
                    <ModalBody>
                        <LocalForm className="container" onSubmit={(values) => {this.handleAddComment(values)} }>
                            <Row className = 'form-group'>
                                <Col sm = {12}>
                                    <Label htmlFor = 'rating'>Rating</Label>
                                </Col>
                                <Col sm = {12}>
                                    <Control.select
                                        className = 'form-control'
                                        type = 'number'
                                        model = '.rating'
                                        id = 'rating'
                                        name = 'rating'
                                        min = '0'
                                        max = '5'
                                        defaultValue = {5}>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className = 'form-group'>
                                <Col sm = {12}>
                                    <Label htmlFor = 'name'>Your Name</Label>
                                </Col>
                                <Col sm = {12}>
                                    <Control.text
                                        className = 'form-control'
                                        model = '.name'
                                        id = 'name'
                                        name = 'name'
                                        placeholder = 'Your Name'
                                        validators = {{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}/>
                                </Col>
                                <Col col = {12}>
                                    <Errors
                                        model = '.name'
                                        show = 'touched'
                                        className='text-danger'
                                        messages = {{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be less than 15 characters'
                                        }} />
                                </Col>
                            </Row>
                            <Row className = 'form-group'>
                                <Col sm = {12}>
                                    <Label htmlFor = 'comment'>Comment</Label>
                                </Col>
                                <Col sm = {12}>
                                    <Control.textarea
                                        className = 'form-control'
                                        rows ='6'
                                        model = '.comment'
                                        id = 'comment'
                                        name = 'comment'
                                        validators = {{
                                            required
                                        }} />
                                </Col>
                                <Col>
                                    <Errors
                                        model = '.comment'
                                        show='touched'
                                        className='text-danger'
                                        messages = {{
                                            required: 'This field is required'
                                        }} />
                                </Col>
                            </Row>
                            <Row className = 'form-group'>
                                <Col>
                                    <Button type="submit" onClick={this.toggle} color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default DishDetail;
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    if(dish != null){
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
            comments.map((comment) => {
                return (
                    <div key = {comment.id}>
                        <p>{comment.comment}</p>
                        <p>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}`}</p>
                    </div>
                )
            })
        )
    } 
}

const DishDetail = (props) => {
    const dish = props.selectedDish;
    if(dish === null || dish === undefined) return (<div></div>);
    return (
        <div className="container">
            <div className = 'row'>
                <RenderDish dish={dish} />
                
                <div className = 'col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
            <br/>
        </div>
    );
}

export default DishDetail;
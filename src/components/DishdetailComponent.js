import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    // function for rendering dish as as view in our page
    renderDish(dish) {
        if (dish != null) {
            const comment = dish.comments.map((comment) => {
                return (
                    <div key = {comment.id}>
                        <p>{comment.comment}</p>
                        <p>{`-- ${comment.author} , ${comment.date}`}</p>
                    </div>
                );
            });
            return (
                <div className = 'row'>
					<div className = 'col-12 col-md-5 m-1'>
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name}/>
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className = 'col-12 col-md-5 m-1'>
					    <h4>Comments</h4>
                        {comment}			
					</div>
				</div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    // render the renderDish Function to web page
    render () {
        const dish = this.props.selectedDish;
        return (
            <div>
                {this.renderDish(dish)}
                <br/>
            </div>
        );
    }
}

export default DishDetail;
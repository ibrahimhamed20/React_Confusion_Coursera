import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';


class Menu extends Component {

    // constructor of props that contain states of components data
    constructor(props) {
        super(props);

        // this peace of code to make the status of selected dishes Null
        this.state = {
            selectedDish: null
        };

    }

    // function for reset the value of seleced dish with the dish data
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    // render function for map the data of dishes array to display as cards
    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail selectedDish = {this.state.selectedDish}/>
            </div>
        );
        
    }
}

export default Menu;
import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES, 
            selectedDish: null
        };
    }
  
    // function for reset the value of seleced dish with the dish data
    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Menu 
                    dishes={ this.state.dishes }
                    onClick={ (dishId) => this.onDishSelect(dishId) }
                />
                <DishDetail 
                    selectedDish={ 
                        this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]
                    }
                />
                <br/>
                <Footer />
            </div>
        );
    }
}

export default Main;
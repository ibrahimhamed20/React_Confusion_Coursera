import React, { Component } from 'react';
import Menu from './MenuComponent';
//import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES, 
            selectedDish: null
        };
    }
  
    // function for reset the value of seleced dish with the dish data
    // onDishSelect(dishId) {
    //     this.setState({
    //         selectedDish: dishId
    //     });
    // }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path='/menu' 
                        component={ () => 
                            <div>
                                <Menu 
                                    dishes={this.state.dishes} 
                                    //onClick={ (dishId) => this.onDishSelect(dishId) }
                                />
                                {/* <DishDetail 
                                    selectedDish={ 
                                        this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]
                                    }
                                /> */}
                            </div>
                        } 
                    />
                    <Redirect to="/home" />
                </Switch>
                <br/>
                <Footer />
            </div>
        );
    }
}

export default Main;
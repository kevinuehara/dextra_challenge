import React, { Component } from 'react';
import axios from 'axios';

import Menu from './../ui/Menu';
import Ingredients from './../ui/Ingredients';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            ingredients: [],
            totalPrice: 0.0
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3500/getMenu")
            .then(res => {
                this.setState({ menu: res.data });
            })
            .catch(error => {
                console.log(error);
            });

        axios.get("http://localhost:3500/getIngredients")
            .then(res => {
                this.setState({ ingredients: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    sumPrice = (price) => { 
        var result = this.state.totalPrice + price;

        this.setState({totalPrice: result});

        console.log(this.state.totalPrice);
    };

    render() {
        return (<div className="container">
            <div className="col-md-12">
            <br/><br/><br/>
                <Menu menuItens={this.state.menu} onClick={this.sumPrice}/>
                <br/><br/><br/>
                <Ingredients ingredientItens={this.state.ingredients} onClick={this.sumPrice}/>
            </div>
        </div>);
    }
}
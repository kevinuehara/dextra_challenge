import React, { Component } from 'react';
import axios from 'axios';

import Menu from './../ui/Menu';
import Ingredients from './../ui/Ingredients';
import Price from './../ui/Price';
import CartButton from './../ui/CartButton';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            ingredients: [],
            totalPrice: 0.0,
            totalPriceWithDiscount: 0.0,
            ingredientsUsed: [],
            cart: [],
            sale: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/getMenu")
            .then(res => {
                this.setState({ menu: res.data });
            })
            .catch(error => {
                console.log("Erro ao realizar busca nodeJS para o cardápio: " + error);
            });

        axios.get("http://localhost:8080/getIngredients")
            .then(res => {
                this.setState({ ingredients: res.data });
            })
            .catch(error => {
                console.log("Erro ao realizar busca nodeJS para os ingredientes: " + error);
            });
    }

    handleAddCart = (price, ingredients, cartHistory) => {
        var sumPriceResult = this.state.totalPrice + price;
        var sumPriceWithDiscount = sumPriceResult;
        var ingredientsUsed = this.state.ingredientsUsed;
        var cart = this.state.cart;
        var sales = [];

        if (Array.isArray(ingredients)) {
            ingredientsUsed = ingredientsUsed.concat(ingredients);
            cart.push(cartHistory);

            ingredients.forEach(element => {
                let response = this.applyDiscountCheeseAndBurger(sumPriceWithDiscount, ingredientsUsed);

                sumPriceWithDiscount = response.priceTotal;
                sales = response.sales;
            });

            var discountLight = this.applyDiscountLight(sumPriceWithDiscount, ingredientsUsed);
            sumPriceWithDiscount = discountLight.priceTotal;
            sales = discountLight.sales;

        } else {
            ingredientsUsed.push(ingredients);
            cart.push(cartHistory);

            let response = this.applyDiscountCheeseAndBurger(sumPriceWithDiscount, ingredientsUsed);
            sumPriceWithDiscount = response.priceTotal;
            sales = response.sales;

            var discountLight = this.applyDiscountLight(sumPriceWithDiscount, ingredientsUsed);
            sumPriceWithDiscount = discountLight.priceTotal;
            sales = discountLight.sales;
        }

        this.setState({ sale: sales, totalPrice: sumPriceResult, totalPriceWithDiscount: sumPriceWithDiscount, cart: cart, ingredientsUsed: ingredientsUsed });

    };

    removeFromCart = (price, name, ingredients) => {
        var subPriceResult = this.state.totalPrice - price;
        var subPriceWithDiscount = subPriceResult;
        var cart = this.state.cart;
        var ingredientsUsed = this.state.ingredientsUsed;
        var sales = [];

        let posCart = cart.map(cart => { return cart.name; }).indexOf(name);
        if (posCart >= 0) {
            cart.splice(posCart, 1);
        }

        if (Array.isArray(ingredients)) {
            ingredients.forEach(element => {
                let idx = ingredientsUsed.indexOf(element);
                if (idx >= 0) {
                    ingredientsUsed.splice(idx, 1);
                }
            });

            ingredients.forEach(element => {
                var discountBurger = this.applyDiscountCheeseAndBurger(subPriceWithDiscount, ingredientsUsed);
                subPriceWithDiscount = discountBurger.priceTotal;
                sales = discountBurger.sales;
            });

            var discountLight = this.applyDiscountLight(subPriceWithDiscount, ingredientsUsed);
            subPriceWithDiscount = discountLight.priceTotal;
            sales = discountLight.sales;

        } else {

            let idx = ingredientsUsed.indexOf(name)
            if (idx >= 0) {
                ingredientsUsed.splice(idx, 1);
            }

            var discountBurger = this.applyDiscountCheeseAndBurger(subPriceWithDiscount, ingredientsUsed);
            subPriceWithDiscount = discountBurger.priceTotal;
            sales = discountBurger.sales;

            var discountLight = this.applyDiscountLight(subPriceWithDiscount, ingredientsUsed);
            subPriceWithDiscount = discountLight.priceTotal;
            sales = discountLight.sales;
        }

        this.setState({ sale: sales, totalPrice: subPriceResult, totalPriceWithDiscount: subPriceWithDiscount, cart: cart, ingredientsUsed: ingredientsUsed });
    };

    applyDiscountLight(priceWithDiscount, ingredients) {

        var sales = this.state.sale;

        if (ingredients.length > 0) {
            if (ingredients.includes('Alface') && !ingredients.includes('Bacon')) {
                if (ingredients.length > 1 && ingredients[0] != 'Alface') {
                    priceWithDiscount = priceWithDiscount * 0.9;

                    if (!sales.includes('Light'))
                        sales.push("Light");
                }
            } else {
                var idx = sales.indexOf('Light');
                if (idx > -1)
                    sales.splice(idx, 1);
            }
        }

        return { sales: sales, priceTotal: priceWithDiscount };
    }

    getPriceIngredient(name) {
        var ingredientObj = this.state.ingredients.find(ingredint => {
            return ingredint.name === name;
        });

        return ingredientObj.price;
    }

    getMountIngredientsUsed(name, ingredients) {
        var qtd = ingredients.filter(ingredient => {
            return ingredient === name;
        }).length;

        return qtd;
    }

    applyDiscountCheeseAndBurger(priceWithDiscount, ingredients) {
        var sales = this.state.sale;

        if (ingredients.length > 0) {

            const burgerAmount = this.getMountIngredientsUsed("Hambúrguer", ingredients);
            const cheeseAmount = this.getMountIngredientsUsed("Queijo", ingredients);

            const priceCheese = this.getPriceIngredient("Queijo");
            const priceBurger = this.getPriceIngredient("Hambúrguer");

            if (burgerAmount > 0 && burgerAmount % 3 == 0) {
                let dicount = (burgerAmount / 3) * priceBurger;
                priceWithDiscount = priceWithDiscount - dicount;

                if (!sales.includes('Mais hambúrguer'))
                    sales.push("Mais hambúrguer");
            } else if (burgerAmount % 3 != 0) {
                var idx = sales.indexOf('Mais hambúrguer');
                if (idx > -1)
                    sales.splice(idx, 1);
            }

            if (cheeseAmount > 0 && cheeseAmount % 3 == 0) {
                let dicount = (cheeseAmount / 3) * priceCheese;
                priceWithDiscount = priceWithDiscount - dicount;

                if (!sales.includes('Mais queijo'))
                    sales.push("Mais queijo");
            } else if (cheeseAmount % 3 != 0) {
                var idx = sales.indexOf('Mais queijo');
                if (idx > -1)
                    sales.splice(idx, 1);
            }
        }
        return { sales: sales, priceTotal: priceWithDiscount };
    }

    render() {
        return (<div className="container">
            <div className="col-md-12">
                <CartButton allIngredients={this.state.ingredients} cartAddedIngredients={this.state.ingredientsUsed} cartHistory={this.state.cart} onClick={this.removeFromCart}
                    totalPrice={this.state.totalPriceWithDiscount} format={this.numberFormat} />
                <Price totalPriceWithDiscount={this.state.totalPriceWithDiscount} totalPrice={this.state.totalPrice} format={this.numberFormat} sales={this.state.sale} />
                <Menu menuItens={this.state.menu} onClick={this.handleAddCart} format={this.numberFormat} />
                <hr />
                <Ingredients ingredientItens={this.state.ingredients} onClick={this.handleAddCart} format={this.numberFormat} />
                <hr />
                <br /><br /><br /><br />
            </div>
        </div>);
    }

    numberFormat = (number) => {
        var formatted = "R$ " + number.toFixed(2).replace(".", ",");
        return formatted;
    }
}
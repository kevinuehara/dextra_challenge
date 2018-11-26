import React from 'react';
import './../css/Home.css';

const CartButton = ({ allIngredients, cartAddedIngredients, cartHistory, totalPrice, format, onClick }) => {

    const style = {
        marginTop: "20px",
    };

    var cartBurguer = "Ainda não foi adicionado nenhum lanche. Escolha um ou faça do zero!"; 
    var cartIngredients = "Ainda não foi feito adicionado nenhum ingrediente. Adicione no seu lanche! ;)";

    if (cartHistory.length > 0) {

        cartBurguer = cartHistory.map((itemCart, i) => {
            if (itemCart.type === 'burger') {

                return (<div className="row" key={i}>
                    <div className="col-md-7">
                        <h6>{itemCart.name}</h6>
                    </div>
                    <div className="col-md-3">
                        <h6>{format(itemCart.price)}</h6>
                    </div>
                    <div className="col-md-1">
                        <i className="fa fa-trash icon_trash" onClick={() => onClick(itemCart.price, itemCart.name, itemCart.ingredients)}></i>
                    </div>
                </div>);
            }
        });

        cartIngredients = cartAddedIngredients.map((itemIngredient, i) => {

            var priceObj = allIngredients.find(ingredint => {
                return ingredint.name === itemIngredient
            });

            return (<div className="row" key={i}>
                <div className="col-md-7">
                    <h6>{itemIngredient}</h6>
                </div>
                <div className="col-md-3">
                    <h6>{format(priceObj.price)}</h6>
                </div>
                <div className="col-md-1">
                    <i className="fa fa-trash icon_trash" onClick={() => onClick(priceObj.price, itemIngredient, itemIngredient)}></i>
                </div>
            </div>);

        });
    }

    return (<div><button type="button" className="btn btn-info" style={style} data-toggle="modal" data-target="#cartModal">
        Ver pedido <span className="badge badge-light">{cartHistory.length}</span>
    </button>

        <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Pedido</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5>Lanche:</h5>
                        {cartBurguer}
                        <hr />
                        <h5>Ingredientes</h5>
                        {cartIngredients}
                        <hr />
                        <h5><b>Total:</b> {format(totalPrice)}</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Fechar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default CartButton;
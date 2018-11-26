import React from 'react';

const Menu = ({ menuItens, onClick, format }) => {

    var menu = "";
    const style = {
        marginTop: "50px"
    };

    if (menuItens.length > 0) {
        menu = menuItens.map((itemMenu, i) => {

            var cartHistory = {
                "name": itemMenu.name,
                "price": itemMenu.default_price,
                "ingredients": itemMenu.ingredients,
                "type": "burger"
            };

            return (<div key={i}>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{itemMenu.name}</h5>
                            <p className="card-text">{format(itemMenu.default_price)}</p>
                            <p className="card-text">{itemMenu.ingredients.join(', ')}</p>
                            <button onClick={() => onClick(itemMenu.default_price, itemMenu.ingredients, cartHistory)} className="btn btn-primary">Adicionar</button>
                        </div>
                    </div>
                </div>

            </div>);
        });
    }

    return (<div style={style}>
        <h2>Escolha seu lanche ou faça um do zero!</h2>
        <div className="row">
            {menu}
        </div>
    </div>
    );
}

export default Menu;
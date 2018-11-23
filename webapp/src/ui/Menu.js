import React from 'react';

const Menu = ({ menuItens, onClick }) => {

    var menu = "";

    if (menuItens.length > 0) {
        menu = menuItens.map((itemMenu, i) => {
            return (<div key={i}>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{itemMenu.name}</h5>
                            <p className="card-text">{numberFormat(itemMenu.default_price)}</p>
                            <p className="card-text">{itemMenu.ingredients.join(', ')}</p>
                            <button onClick={() => onClick(itemMenu.default_price)} className="btn btn-primary">Adicionar</button>
                        </div>
                    </div>
                </div>

            </div>);
        });
    }

    return (<div>
        <h2>Escolha seu lanche ou faça um do zero!</h2>
        <div className="row">
            {menu}
        </div>
    </div>
    );
}

var numberFormat = (number) => {
    var formatted = "R$ " + number.toFixed(2).replace(".", ",");
    return formatted;
}

export default Menu;
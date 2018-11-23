import React from 'react';

const Ingredients = ({ ingredientItens, onClick} ) => {

    var ingredients = "";

    if (ingredientItens.length > 0) {
        ingredients = ingredientItens.map((item, i) => {
            return (<div key={i}>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{numberFormat(item.price)}</p>
                            <button onClick={() => onClick(item.price)} className="btn btn-primary">Adicionar</button>
                        </div>
                    </div>
                </div>

            </div>);
        });
    }

    return (<div>
        <h2>Complemente ainda mais lanche!</h2>
        <div className="row">
            {ingredients}
        </div>
    </div>
    );
};

var numberFormat = (number) => {
    var formatted = "R$ " + number.toFixed(2).replace(".", ",");
    return formatted;
}

export default Ingredients;
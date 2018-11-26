import React from 'react';

const Ingredients = ({ ingredientItens, onClick, format }) => {

    var ingredients = "";

    const style = {
        marginTop: "50px"
    };

    if (ingredientItens.length > 0) {
        ingredients = ingredientItens.map((item, i) => {

            var cartHistory = {
                "name": item.name,
                "price": item.price,
                "ingredients": [],
                "type": "ingredient"
            };

            return (<div key={i}>
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{format(item.price)}</p>
                            <button onClick={() => onClick(item.price, item.name, cartHistory)} className="btn btn-primary">Adicionar</button>
                        </div>
                    </div>
                </div>

            </div>);
        });
    }

    return (<div style={style}>
        <h2>Adicione ingredientes!</h2>
        <div className="row">
            {ingredients}
        </div>
    </div>
    );
};

export default Ingredients;
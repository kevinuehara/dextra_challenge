import React from 'react';

const Price = ({ totalPrice, totalPriceWithDiscount, format, sales }) => {

    const style = {
        position: "fixed",
        zIndex: "2",
        width: "400px",
        bottom: "0"
    };
    
    var sale = "nenhuma";
    var finalPrice = totalPrice;

    if (sales.length > 0) {
        sale = sales.join(', ');
        finalPrice = totalPriceWithDiscount;
    }

    return (<div className="alert alert-primary" role="alert" style={style}>
        Total: {format(finalPrice)}<br />
        Promoções: { sale }
    </div>);
};

export default Price;
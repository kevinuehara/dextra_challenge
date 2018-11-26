import React from 'react';
import burger1 from './../images/burger1.jpg';
import burger2 from './../images/burger2.jpg';
import './../css/Slider.css';

const Slider = () => {

    const style = {
        width: "65%",
        margin: "auto",
        marginTop: "50px",
    };

    return (<div>
        <div id="carouselExampleControls" style={style} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={burger1} />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={burger2} />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div className="content">
            <h4>Bem vindo ao Krusty Krab</h4>
            <span>Somos uma startup do ramo de alimentos e precisamos de uma aplicação web para gerir nosso negócio. Nossa especialidade é a venda de lanches, de modo que alguns
                lanches são opções de cardápio e outros podem conter ingredientes personalizados.</span>
            <p>Monte seu lanche, temos promoções disponíveis para você que é um grande fã do Krusty Krab</p>
        </div>

    </div>);
};

export default Slider;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './evento-card.css';

function EventoCard() {
    return (

        <div className="col-md-3 col-sm-12">

            <img src="https://via.placeholder.com/150" className="card-img-top img-cartao" alt="Imagem do Evento" />

            <div className="card-body">

                <h5>Título do Evento</h5>
                <p className="card-text text-justify">Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. </p>

                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to='/' className="btn btn-sm btn-detalhes">+ detalhes</Link>
                    </div>
                    <div className="col-6 text-right">
                        <i class="far fa-eye"></i><span>2019</span>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default EventoCard;
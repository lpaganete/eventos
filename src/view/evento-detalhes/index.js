import React, { useState } from 'react';
import './evento-detalhes.css';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector } from "react-redux";

import Navbar from '../../components/navbar/';


function EventoDetalhes() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <img src="https://via.placeholder.com/150x100" className="img-banner" alt="banner" />
                </div>

                <div className="row mt-5 d-flex justify-content-around">
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <h5><strong>Tipo</strong></h5>
                        <span className="mt-3">Festa</span>
                    </div>
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-calendar-alt fa-2x" />
                        <h5><strong>Data</strong></h5>
                        <span className="mt-3">12/12/20</span>
                    </div>
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-clock fa-2x" />
                        <h5><strong>Hora</strong></h5>
                        <span className="mt-3">19:00</span>
                    </div>
                </div>

                <div className="row box-detalhes mt-5">
                    <h5 className="mx-auto"><strong>Detalhes do Evento</strong></h5>
                    <p className="text-justify p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>

                <Link to='' className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>

            </div>
        </>
    );

}

export default EventoDetalhes;
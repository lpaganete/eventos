import React, { useEffect, useState } from 'react';
import './evento-detalhes.css';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector } from "react-redux";

import Navbar from '../../components/navbar/';


function EventoDetalhes(props) {

    const [evento, setEvento] = useState({});
    const [urlImg, setUrlImg] = useState({});
    const usuarioLogado = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState(1);

    useEffect(() => {
        firebase.firestore().collection('eventos').doc(props.match.params.id).get().then(resultado => {
            setEvento(resultado.data());

            firebase.storage().ref(`imagens/${evento.foto}`).getDownloadURL().then(url => {
                setUrlImg(url)
                setCarregando(0);
            });
        });
    })


    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {
                    carregando ? <div className="row mt-5"> <div class="spinner-border text-danger mx-auto" role="status">
                        <span class="sr-only"></span></div></div>
                        :
                        <div>
                            <div className="row">
                                <img src={urlImg} className="img-banner" alt="banner" />

                                <div className="col-12 text-right mt-1 visualizacoes">
                                    <i class="far fa-eye mr-1"></i><span>{evento.visualizacoes}</span>
                                </div>

                                <h3 className="mx-auto mt-3 titulo"><strong>{evento.titulo}</strong></h3>
                            </div>

                            <div className="row mt-5 d-flex justify-content-around">
                                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                    <i className="fas fa-ticket-alt fa-2x" />
                                    <h5><strong>Tipo</strong></h5>
                                    <span className="mt-3">{evento.tipo}</span>
                                </div>
                                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                    <i className="fas fa-calendar-alt fa-2x" />
                                    <h5><strong>Data</strong></h5>
                                    <span className="mt-3">{evento.data}</span>
                                </div>
                                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                    <i className="fas fa-clock fa-2x" />
                                    <h5><strong>Hora</strong></h5>
                                    <span className="mt-3">{evento.hora}</span>
                                </div>
                            </div>

                            <div className="row box-detalhes mt-5">
                                <div className="col-12 text-center">
                                    <h5><strong>Detalhes do Evento</strong></h5>
                                </div>

                                <div className="col-12 text-center my-3">
                                    <p>{evento.detalhes}</p>
                                </div>
                            </div>

                            {
                                usuarioLogado == evento.usuario ?
                                    <Link to='#' className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>
                                    : ''
                            }

                        </div>
                }
            </div>
        </>
    );

}

export default EventoDetalhes;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import firebase from '../../config/firebase';

//COMPONENTS
import Navbar from '../../components/navbar/';
import EventoCard from '../../components/evento-card/';


function Home() {

    const [eventos, setEventos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

    let listaEventos = [];

    useEffect(() => {
        firebase.firestore().collection('eventos').get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                if (doc.data().titulo.indexOf(pesquisa) >= 0) {
                    listaEventos.push({
                        id: doc.id,
                        ...doc.data()
                    });
                }
            });
            setEventos(listaEventos);
        });
    });

    return (
        <>
            <Navbar />
            <div className="row p-5">
                <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar evento pelo título..." />
            </div>

            <div className="row p-3">
                {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
            </div>

        </>
    );
}

export default Home;
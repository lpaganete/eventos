import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Navbar from '../../components/navbar/';
import { useSelector, useDispatch } from "react-redux";



function Home() {
    return (
        <>
            <Navbar />
            <h1>{useSelector(state => state.usuarioEmail)}</h1>
            <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>

        </>
    );
}

export default Home;
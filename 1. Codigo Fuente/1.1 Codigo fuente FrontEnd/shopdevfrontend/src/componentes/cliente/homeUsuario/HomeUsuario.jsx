import React from 'react';
import './HomeUsuario.css';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { MainHomeCliente } from '../mainHomeCliente/MainHomeCliente';

import AngularLogo from '../../../assets/img/AngularLogo.jpg'
import css from '../../../assets/img/css.jpg'
import html from '../../../assets/img/html.jpg'
import js from '../../../assets/img/js.png'
import node from '../../../assets/img/node.jpg'



export const HomeUsuario = () => {
    return (
        <>
            {/* HEADER */}
            <header>
                <Header></Header>
            </header>
            <main>
                <MainHomeCliente></MainHomeCliente>
            </main>
            
            {/* LOGOS */}
            <div className='containerPadreLogos'>
                <h1>Coleccion de logos</h1>
                <div className='containerLogos'>
                    <i class="fa-solid fa-angles-left tamañoIcono"></i>
                    <img className='tamañoLogos' src={AngularLogo} alt="AngularLogo" />
                    <img className='tamañoLogos' src={css} alt="css" />
                    <img className='tamañoLogos' src={html} alt="html" />
                    <img className='tamañoLogos' src={node} alt="node" />
                    <img className='tamañoLogos' src={js} alt="js" />
                    <i class="fa-solid fa-angles-right tamañoIcono"></i>
                </div>
            </div>

            {/* FOOTER */}
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}
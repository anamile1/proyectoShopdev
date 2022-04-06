import React from 'react';
import './ContenidoPrincipalProductos.css';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { MainTienda } from '../mainTienda/MainTienda';

export const ContenidoPrincipalProductos = () => {
    return (
        <>
            {/* HEADER */}
            <header>
            <Header></Header>
            </header>
            
            {/* MAIN */}
            <MainTienda></MainTienda>

            {/* FOOTER */}
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}
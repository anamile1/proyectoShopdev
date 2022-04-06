import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { MainPago } from '../mainPago/MainPago';

export const ContenidoPago = () => {
    return (
        <>
            {/* HEADER */}
            <header>
            <Header></Header>
            </header>
            
            {/* MAIN */}
            <MainPago></MainPago>

            {/* FOOTER */}
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}
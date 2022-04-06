import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { MainSelectProducto } from '../mainSelectProducto/MainSelectProducto';


export const ContenidoVentanaProducto = () => {
    return (
        <>
            <Header></Header>
            <MainSelectProducto></MainSelectProducto>
            <Footer></Footer>
        </>
    )
}
import React from 'react';
import './ContenidoMisProductosAdmin.css';
import { BarraLateral } from '../../administrador/barraLateral/BarraLateral';
import { HeaderAdmin } from '../../administrador/headerAdmin/HeaderAdmin';
import { MainAdminProductos } from '../mainAdminProductos/MainAdminProductos';

export const ContenidoMisProductosAdmin = () => {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <BarraLateral></BarraLateral>
            <MainAdminProductos></MainAdminProductos>
        </>
    )
}
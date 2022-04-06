import React from 'react';
import { BarraLateral } from '../barraLateral/BarraLateral';
import { HeaderAdmin } from '../headerAdmin/HeaderAdmin';
import { MainAdminPedidos } from '../mainAdminPedidos/MainAdminPedidos';
import './ContenidoPedidosAdmin.css';

export const ContenidoPedidosAdmin = () => {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <BarraLateral></BarraLateral>
            <MainAdminPedidos></MainAdminPedidos>
        </>
    )
}
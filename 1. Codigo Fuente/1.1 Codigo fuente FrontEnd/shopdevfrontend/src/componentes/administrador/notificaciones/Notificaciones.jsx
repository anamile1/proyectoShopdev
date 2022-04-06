import React from 'react';
import './Notificaciones.css'
import { BarraLateral } from '../../administrador/barraLateral/BarraLateral';
import { HeaderAdmin } from '../../administrador/headerAdmin/HeaderAdmin';

export const Notificaciones = () => {
    return(
        <>
            <HeaderAdmin></HeaderAdmin>
            <BarraLateral></BarraLateral>
            
                <h1>NOTIFICACIONES</h1>

                
                <div class="empty_state">
                    <i class="ion-sad-outline"></i>
                    <h3 class="">No posts</h3>
                    <p>There have been no posts in this section yet</p>
                    <button>Call to action</button>
                </div>

            
        </>
    )
}
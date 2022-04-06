import './HeaderAdmin.css';
import React from 'react';

export const HeaderAdmin = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-lightb nav-background">
                    <div class="collapse navbar-collapse " id="navbarText">                       
                        <span class="navbar-text">Administrador</span>
                        <i className="icon-logout fa fa-sign-out-alt fa-2x icono"></i>
                    </div>   
            </nav>
        </>
    )
}
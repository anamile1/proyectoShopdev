import React from 'react';
import './Header.css';
import LogoPrincipal from '../../../assets/img/LogoPrincipal.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div>
            <body className="body">
                <header className="header">
                    <label htmlFor="" onClick={()=>goToHomeUsuario()}>Inicio</label>
                    <div className="separador"></div>
                    <label htmlFor="" onClick={()=>goToHomeCliente()}>Tienda</label>
                    <div><img className="LogoPrincipal" src={LogoPrincipal} alt="LogoPrincipal" onClick={()=>goToHomeUsuario()}></img></div>
                    <a href="#"><i className="fas fa-user-alt colorIcono"></i></a>
                    <a href="#"><i className="fas fa-shopping-bag colorIcono" onClick={()=>goToIconCliente()}></i></a>
                    <div className="separador"></div>
                    <input type="text" placeholder="Buscar" />
                </header> 
                <div className="header2">
                    <a className="aHeader2" href="" onClick={()=>goToHomeCliente()}>Camisetas</a>
                    <a className="aHeader2" href="" onClick={()=>goToHomeCliente()}>Periféricos</a>
                    <a className="aHeader2" href="" onClick={()=>goToHomeCliente()}>Extras</a>
                    <a className="aHeader2" href="" onClick={()=>goToHomeCliente()}>Logotipos</a>
                </div>
            </body>
        </div>
    )
    /* FUNCION RUTAS */
    function goToIconCliente() {
        let ruta = "/login";
        navigate(ruta);
    }

    function goToHomeUsuario() {
        let ruta = "/";
        navigate(ruta);
    }

    function goToHomeCliente() {
        let ruta = "/cliente/listaproductos";
        navigate(ruta);
    }
}
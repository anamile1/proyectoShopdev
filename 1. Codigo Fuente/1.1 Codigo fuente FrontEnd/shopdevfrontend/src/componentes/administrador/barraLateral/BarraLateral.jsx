import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BarraLateral.css';
import Isotipo from '../../../assets/img/Isotipo.png';

export const BarraLateral = () => {

    /* NECESARIO PARA EL FLUJO ENTRE RUTAS */
    const navigate = useNavigate();

    return (
        <>
        <nav className="main-menu">
                <ul>
                    {/* icono blanco redondo / todos los iconos de la barra lateral */}
                    <li>
                        <a href="" onClick={goToHomeUsuario}>
                            <img className='logoIsotipo'  src={Isotipo} alt="Isotipo" />
                        </a>
                        <hr style={{ backgroundColor: 'white' }}></hr>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>
                            <i className="fa fa-solid icon-barra fa-list-check  fa-2x"></i>
                            <span className="nav-text" onClick={goToAdminPedidos}>
                                Pedidos
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>
                        {/* <i className=" fa fa-solid icon-barra fa-cart-flatbed-boxes fa-2x" ></i> */}
                        <i className="fas fa-shopping-bag icon-barra fa-x2"></i>
                        {/* <i class="fa fa-solid fa-bell-on icon-barra fa-x2"></i> */}
                            <span className="nav-text" onClick={goToAdminProductos}>
                                Productos
                            </span>
                        </a>
                    </li>
                    <li className="has-subnav mt-4">
                        <a>
                        <i class="fa-solid fa-bells icon-barra "></i>
                            <span className="nav-text">
                                Notificaciones
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
    /* LOGICA DE FLUJOS */
    function goToAdminPedidos() {
        let ruta = "/admin/pedidos";        
        navigate(ruta);
    }
    function goToAdminProductos() {
        let ruta = "/admin/productos";        
        navigate(ruta);
    }
    function goToHomeUsuario() {
        let ruta = "/";
        navigate(ruta);
    }
}
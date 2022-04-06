import './MainSelectProducto.css';
import { modificarProducto } from "../../../services/servicioShopdev";
import React from 'react';
import tallaje from '../../../assets/img/tallaje.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";


export const MainSelectProducto = () => {
    /* NECESARIO PARA EL FLUJO ENTRE RUTAS */
    const navigate = useNavigate();

    /*para que el logo se refleje*/
    var [imgTemporalLogo, setImgTemporalLogo] = useState([]);
    var [file, setFile] = useState([]);

    /*  */
    const { codigo } = useParams()
    console.log(codigo);

    /* LOGICA DE LOS PRODUCTOS */
    var [listaProductos, setListaProductos] = useState([]);

    /* LO PRIMERO QUE SE VA A EJECUTAR */
    useEffect(() => {
        getProductos();
    }, []);

    /* LOGICA DE LISTAR PRODUCTOS cliente API */
    const getProductos = () => {
        axios
            .get(`https://shopdevbackend.herokuapp.com/listarProducto/${codigo}`)
            .then((data) => {
                setListaProductos(data.data);
                console.log(listaProductos + "aquiiiiiiiii");
            });
    };

    console.log(listaProductos);

    const procesoLogo = (file) => {
        setImgTemporalLogo(URL.createObjectURL((file)))
        setFile(file)
    }



    return (
        <>
            {listaProductos.map((producto) => (
                

                    <div class="mainContainerPadre">

                        <div class="containerIzq">
                             <div class="containerIzqImgs">
                                <div><img class="containerIzqImgs3" src={producto.imagenes} alt="java" /></div>
                                <div><img class="containerIzqImgs3" src={producto.imagenes} alt="java" /></div>
                                <div><img class="containerIzqImgs3" src={producto.imagenes} alt="java" /></div>
                            </div> 

                            <div><img class="containerIzqImgGrande" src={producto.imagenes} alt="java" /></div>
                        </div>

                        <div class="containerDer">


                            <div class="containerDer1">
                                <h3>{producto.nombre}</h3>
                                <h5>Talla</h5>
                                <select name="color">
                                    <option value="S">S</option>
                                    <option value="M" selected>M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                                <a data-bs-toggle='modal' data-bs-target='#modalTalla' href="" className='containerTallas'>¿Cual es mi talla?</a>
                            </div>

                            <div class="containerDer2">
                                <h5>Color</h5>
                                <select name="color">
                                    <option value="Azul">Azul</option>
                                    <option value="Blanco" selected>Blanco</option>
                                    <option value="Negro">Negro</option>
                                    <option value="Rojo">Rojo</option>
                                </select>
                            </div>
                            <div class="containerDer3">
                                <h5>Logo</h5>
                                <div class="containerDerTodosLogos">
                                    <div><img class="containerDerLogos" src={imgTemporalLogo} alt="Imagen seleccionada" /></div>
                                </div>
                                <br />

                                <h5 class="modal-title">Elige tu logo aquí</h5>
                                <input type="file" accept="image/jpg, image/png" id='miArchivo' name='file' onChange={(e) => procesoLogo(e.target.files[0])} />

                            </div>
                        </div>
                    </div>
                
            )
            )}

            <div class="d-grid gap-2 d-md-block">
                <button class="btn btn-primary -xl" type="button" style={{ background: '#155983' }} onClick={() => goToPago()}>Agregar al carrito</button>
            </div>




            {/* MODAL PARA ¿Cual es mi talla? */}
            <div className="modal" tabindex="-1" id='modalTalla'>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header miTalla">
                            <h5 class="modal-title">¿Cual es mi talla?</h5>
                        </div>
                        <div>
                            <img src={tallaje} alt="cualquiera" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    /* FUNCIONES PARA RUTAS */
    function goToPago() {
        let ruta = "/cliente/pago";
        navigate(ruta);
    }
}
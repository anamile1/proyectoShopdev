import "./Login.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



export const Login = () => {

    /* NECESARIO PARA EL FLUJO ENTRE RUTAS */
    const navigate = useNavigate();

    /* formulario con valores LOGIN*/
    const [formValuesLogin, setFormValuesLogin] = useState({
        correo: "",
        contraseña: "",
    });

    const actualizacionForm = (value, campo) => {
        setFormValuesLogin({
            ...formValuesLogin,
            [campo]: value,
        });
    };

    const iniciarSesion = () => {
        
        axios.post("https://shopdevbackend.herokuapp.com/login", formValuesLogin)
        .then(response => {
            console.log(response);
            if (response.data.rol === 1) {
                goToHomeCliente();
            } else if(response.data.rol === 2){
                goToAdminProductos();
            }
            console.log(response);
        })

    };

    /* --------------------------------------------------------------------------------------------------------------- */

    /* formulario con valores REGISTRO*/
    const [formValuesRegistro, setformValuesRegistro] = useState({
        cedula: '',
        nombres: '',
        telefono: '',
        departamento: '',
        ciudad: '',
        direccion: '',
        correo: '',
        contraseña: '',
        rol: '',
    });

    const actualizacionFormRegistro = (value, campo) => {
        setformValuesRegistro({
            ...formValuesRegistro,
            [campo]: value,
        })
    }

    const Registro = () => {
        axios.post("https://shopdevbackend.herokuapp.com/registro", formValuesRegistro)
        .then(response => {
            console.log(response);
            
        })
    }

    /* --------------------------------------------------------------------------------------------------------------- */

    







    return (
        <React.Fragment> 
            {/* FONDO LOGIN-IMG */}
            <div className="fondo">
                <div className="div-login p-5">
                    <div className="div-login-h1 mb-5">
                        <h4>Inicio de sesión</h4>
                    </div>
                    <div>
                        {/* FORMULARIO LOGIN */}
                        <form className="input-group ">
                            <input type="text" className="form-control" name="correo" 
                            value={formValuesLogin.correo} onChange={({ target }) =>
                            actualizacionForm(target.value, "correo")}
                            placeholder="Correo" aria-describedby="basic-addon1"
                            style={{ borderRadius: "0", height: "4em", width: "24em" }}/>
                            <br /><br />
                            <input
                                type="password"
                                className="form-control"
                                name="contraseña"
                                value={formValuesLogin.contraseña}
                                onChange={({ target }) =>
                                    actualizacionForm(target.value, "contraseña")
                                }
                                placeholder="Contraseña"
                                aria-describedby="basic-addon1"
                                style={{ borderRadius: "0", height: "4em", width: "24em" }}
                            />
                        </form>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="mt-5 btn btn-lg  btn-fondo"
                            onClick={()=>iniciarSesion()}
                            style={{ width: "-webkitFillAvailable 19em" }}>
                            Ingresar
                        </button>
                    </div>
                    <br />
                    <br />

                    <a href="registro" class="btn" data-bs-toggle="modal" data-bs-target="#modalRegistro">
                        Crear cuenta nueva
                    </a>
                </div>
            </div>

            {/* MODAL DE REGISTRO */}
            <div className="modal" tabIndex="-1" id="modalRegistro">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Registrar Usuario</h5>
                        </div>
                        <div className="modal-body">

                            <form className="input-group ">

                                <br /><br />
                                <div className="row">
                                    <div className="form-group col">
                                        <input type="text" className="form-control input-sm chat-input" name='cedula' value={formValuesRegistro.cedula} onChange={({ target }) => actualizacionFormRegistro(target.value, 'cedula')} placeholder="Cedula" />
                                    </div>
                                    <div className="form-group col">
                                        <input type="text" className="form-control input-sm chat-input" name='nombres' value={formValuesRegistro.nombres} onChange={({ target }) => actualizacionFormRegistro(target.value, 'nombres')} placeholder="Nombres" />
                                    </div>
                                </div>
                                <br /><br />

                                <div className="row">
                                    <div className="form-group col">
                                        <input type="text" className="form-control input-sm chat-input" name='telefono' value={formValuesRegistro.telefono} onChange={({ target }) => actualizacionFormRegistro(target.value, 'telefono')} placeholder="Telefono" />
                                    </div>

                                    <div className="form-group col">
                                        <input type="text" className="form-control input-sm chat-input" name='departamento' value={formValuesRegistro.departamento} onChange={({ target }) => actualizacionFormRegistro(target.value, 'departamento')} placeholder="Departamento" />
                                    </div>
                                </div>
                                <br /><br />
                                <div className="row">
                                    <div className="form-group col">
                                        <input type="text" className="form-control input-sm chat-input" name='ciudad' value={formValuesRegistro.ciudad} onChange={({ target }) => actualizacionFormRegistro(target.value, 'ciudad')} placeholder="Ciudad" />
                                    </div>

                                    <div className="form-group col">
                                        <input type="text" className="form-control input-sm chat-input" name='direccion' value={formValuesRegistro.direccion} onChange={({ target }) => actualizacionFormRegistro(target.value, 'direccion')} placeholder="Direccion" />
                                    </div>
                                </div>

                                <br /><br />

                                <div className="row">
                                    <div className="form-group col">
                                        <input type="text" className="form-control input-sm chat-input" name='correo' value={formValuesRegistro.correo} onChange={({ target }) => actualizacionFormRegistro(target.value, 'correo')} placeholder="Usuario" />
                                    </div>

                                    <div className="form-group col">
                                        <input type="password" className="form-control input-sm chat-input" name='contraseña' value={formValuesRegistro.contraseña} onChange={({ target }) => actualizacionFormRegistro(target.value, 'contraseña')} placeholder="Contraseña" />
                                    </div>
                                </div>
                                <br /><br />
                            </form>
                            
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancelar
                                </button>
                                <button type='button' className="btn btn-danger btn-md" onClick={Registro}> Registrarse </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

    {/* FUNCIONES DE RUTAS */ }
    function goToHomeCliente() {
        let ruta = "/cliente/listaproductos";
        navigate(ruta);
    }
    
    function goToAdminProductos() { 
        let ruta = "/admin/productos";
        navigate(ruta);
    }

    function goToLogin() {
        let ruta = "/login";
        navigate(ruta);
    }
};

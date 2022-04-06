import './Registro.css';
import React from 'react';
import { useState } from 'react';
import { saveRegistro } from '../../services/servicioShopdev';

export const Registro = () => {

    const [formValuesRegistro, setformValuesRegistro] = useState({
        cedula:'',
        nombres:'',
        telefono:'',
        departamento:'',
        ciudad:'',
        direccion:'',
        correo: '',
        contraseña: '',
        rol:'',
    });

    const actualizacionForm = (value, campo) =>{
        setformValuesRegistro({
            ...formValuesRegistro,
            [campo]:value,
        })
    }

    const _handleSubmit = (event) => {
        event.preventDefault()
        handleSubmit({...formValuesRegistro})
    }

    const handleSubmit = (data) => {
        saveRegistro(data)
    }

    return(
        <React.Fragment> {/* Que significa */}
            <div className="div-login p-5">
                        <div className="div-login-h1 mb-5">
                            <h4>Inicio de sesión</h4>
                        </div>
                        <div>
                            <form className="input-group ">
                                <input type="text" className="form-control" placeholder='Correo' 
                                    aria-describedby="basic-addon1" style={{ borderRadius: "0", height: "4em", width: "24em" }} />
                                <br /><br />
                                <input type="password" className="form-control" placeholder='Contraseña' 
                                    aria-describedby="basic-addon1" style={{ borderRadius: "0", height: "4em", width: "24em" }} />
                            </form>
                        </div>
                    
                            <div>
                                <button type="button" className="mt-5 btn btn-lg  btn-fondo" style={{ width: "-webkitFillAvailable 19em" }}>Ingresar</button>
                            </div>
                            <br /><br />
                            <div>
                                <a href="registro">Crear cuenta nueva</a>
                            </div>
                    </div>

































                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-offset-5 col-md-4 text-center">
                            <div className="form-login">
                                <h4>Iniciar sesión</h4>
                                <br /><br />
                                <form>
                                <input type="text"  className="form-control input-sm chat-input" name='cedula' value={formValuesRegistro.cedula} onChange={({target}) => actualizacionForm(target.value, 'cedula')} placeholder="Cedula"/>
                                <br /><br />
                                <input type="text"  className="form-control input-sm chat-input" name='nombres' value={formValuesRegistro.nombres} onChange={({target}) => actualizacionForm(target.value, 'nombres')} placeholder="Nombres"/>
                                <br /><br />
                                <input type="text"  className="form-control input-sm chat-input" name='telefono' value={formValuesRegistro.telefono} onChange={({target}) => actualizacionForm(target.value, 'telefono')} placeholder="Telefono"/>
                                <br /><br />
                                <input type="text"  className="form-control input-sm chat-input" name='departamento' value={formValuesRegistro.departamento} onChange={({target}) => actualizacionForm(target.value, 'departamento')} placeholder="Departamento"/>
                                <br /><br />
                                <input type="text"  className="form-control input-sm chat-input" name='ciudad' value={formValuesRegistro.ciudad} onChange={({target}) => actualizacionForm(target.value, 'ciudad')} placeholder="Ciudad"/>
                                <br /><br />
                                <input type="text"  className="form-control input-sm chat-input" name='direccion' value={formValuesRegistro.direccion} onChange={({target}) => actualizacionForm(target.value, 'direccion')} placeholder="Direccion"/>
                                <br /><br />
                                <input type="text"  className="form-control input-sm chat-input" name='correo' value={formValuesRegistro.correo} onChange={({target}) => actualizacionForm(target.value, 'correo')} placeholder="Usuario"/>
                                <br /><br />
                                <input type="password" className="form-control input-sm chat-input" name='contraseña' value={formValuesRegistro.contraseña} onChange={({target}) => actualizacionForm(target.value, 'contraseña')} placeholder="Contraseña"/>
                                <br /><br />
                                <input type="password" className="form-control input-sm chat-input" name='rol' value={formValuesRegistro.rol} onChange={({target}) => actualizacionForm(target.value, 'rol')} placeholder="Rol"/>
                                </form>
                                <div className="wrapper">
                                        <span className="group-btn">
                                        <button type='button' className="btn btn-danger btn-md"  onClick={ _handleSubmit }> Registrar <i className="fa fa-sign-in"></i></button>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/>
                <div className="footer text-white text-center">
                    <p>© 2022 Unique Login Form. All rights reserved | Design by <a href="https://www.google.com/">ShopDev</a></p>
                </div> */}
            </React.Fragment>
    )
}
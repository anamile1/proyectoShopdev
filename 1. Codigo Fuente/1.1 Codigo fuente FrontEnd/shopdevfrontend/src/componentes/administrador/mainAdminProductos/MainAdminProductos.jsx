import { guardarNuevoProducto, modificarProducto } from "../../../services/servicioShopdev";
import axios, { Axios } from 'axios'
import './MainAdminProductos.css';
import React, { useEffect } from "react";
import { useState } from "react";


export const MainAdminProductos = () => {
    const [msgModalProducto, setmsgModalProducto] = useState([]);

    const [listaProductos, setListaProductos] = useState([]);
    const [fotoProducto, setFotoProducto] = useState();
    

    /* LO PRIMERO QUE SE VA A EJECUTAR */
    useEffect(() => {
        getProductos();  
    }, [])

    /*------------------------------------------------------------------------------------------------------------------------------*/

    /* LOGICA CONSUMO API NUEVO PRODUCTO */
    const [formValuesNuevoProducto, setFormValuesNuevoProducto] = useState({
        nombre: "",
        precio: "",
        cantidad: "",
        categoria: "",
        color: "",
        talla: "",
        descripcion: "",
        codigo:""
    }
    );

    const actualizacionFormNuevoProducto = (value, campo) => {
        setFormValuesNuevoProducto({
            ...formValuesNuevoProducto,
            [campo]:value,
        })
    };

    /* LOGICA DE LISTAR PRODUCTOS ADMIN API */
    const getProductos = () => {
        axios.get("https://shopdevbackend.herokuapp.com/homeProductos")
        .then(data => {         
            setListaProductos(data.data)           
            console.log(listaProductos)            
        })
    }

    /*------------------------------------------------------------------------------------------------------------------------------*/

    const tituloModalNuevoProducto = (txtModal) =>{
        setmsgModalProducto(txtModal) ;
    }

    /*limpiar formulario */
    const limpiarFormulario = () => {
        setFormValuesNuevoProducto(
            {
                nombre: "",
                precio: "",
                cantidad: "",
                categoria: "",
                color: "",
                talla: "",
                descripcion: "",
                imagen: "",
            }
        );
    }

    /*------------------------------------------------------------------------------------------------------------------------------*/

    /* LOGICA DE ELIMINAR NUEVO PRODUCTO */
    const eliminarProducto = (producto) => {
        console.log(producto.codigo);
        axios.delete("https://shopdevbackend.herokuapp.com/eliminarProducto/"+producto.codigo)
        .then(respuesta =>{
            getProductos();
        })
    }

    /*------------------------------------------------------------------------------------------------------------------------------*/

    /* LOGICA modificar PRODUCTO ADMIN */

    const setearProductoAModificar = (producto,txtModal) => {
        setmsgModalProducto(txtModal) ;
        console.log(producto);
        setFormValuesNuevoProducto(producto);
    }

    const agregarNuevoProducto = () => {
        var productoNuevo = {
            nombre: formValuesNuevoProducto.nombre,
            precio: formValuesNuevoProducto.precio,
            cantidad: formValuesNuevoProducto.cantidad,
            categoria: formValuesNuevoProducto.categoria,
            color: formValuesNuevoProducto.color,
            talla: formValuesNuevoProducto.talla,
            descripcion: formValuesNuevoProducto.descripcion,
            imagen: fotoProducto,
        }
       guardarNuevoProducto(productoNuevo).then(a=>{
              getProductos();
       limpiarFormulario();
       });
    
       
       /* console.log("AGREGO"); */
    }

    const agregarEditarProducto = () => {
    
        if (msgModalProducto === "Crear") {
            agregarNuevoProducto();
        } else if (msgModalProducto === "Editar"){
            editar();
        }
    }

    const editar = () => {
        var productoModificado = {
            codigo:formValuesNuevoProducto.codigo,
            nombre: formValuesNuevoProducto.nombre,
            precio: formValuesNuevoProducto.precio,
            cantidad: formValuesNuevoProducto.cantidad,
            categoria: formValuesNuevoProducto.categoria,
            color: formValuesNuevoProducto.color,
            talla: formValuesNuevoProducto.talla,
            descripcion: formValuesNuevoProducto.descripcion,
            imagen: fotoProducto,
        }
        console.log(productoModificado);
        modificarProducto(productoModificado).then(()=>{
                  getProductos();
  
        });
    }
















    return (
        <>
        
            {/* CONTAINER DE ADMIN PRODUCTOS */}
                <div className='container'>
                    <div className='containerTitulo'>
                        <h2><i className="fa-solid fa-box-circle-check"></i> Mis Productos</h2>
                        <button type="button" class="btn btn-light" data-bs-toggle='modal' data-bs-target='#modalProducto'onClick={()=>tituloModalNuevoProducto("Crear")}>Nuevo Producto</button>
                    </div> 

                    {/* TABLA DE PRODUCTOS */}
                    <table>
                        <thead className="tituloTabla">
                            <tr>
                                <th scope="col">IMAGEN</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">CODIGO</th>
                                <th scope="col">PRECIO</th>
                                <th scope="col">INVENTARIO</th>
                                <th scope="col">ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                             {listaProductos.map( producto => (
                                
                            <tr>
                                <th scope="row" ><img className="imgListaProducto" src={producto.imagenes} alt="N/A" /></th>
                                <td>{producto.nombre}</td>
                                <td>{producto.codigo}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.cantidad}</td>
                                <td className="distIconos">
                                    <i class="fa-solid fa-trash-can" onClick={()=>eliminarProducto(producto)}></i>                                   
                                    <i class="fa-solid fa-pencil" data-bs-toggle='modal' data-bs-target='#modalProducto' onClick={()=>setearProductoAModificar(producto,"Editar")}></i>
                                </td>
                            </tr>
                                
                        ))}
                        </tbody>
                    </table>
                </div>

    {/*------------------------------------------------------------------------------------------------------------------------------*/}

                {/* MODAL NUEVO PRODUCTO */}
                <div className="modal" tabindex="-1" id='modalProducto'>
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header"> 
                                        <h5 class="modal-title">{msgModalProducto} Producto</h5> 
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="modal-title">Informacion General</h5>
                                    </div>

                                    <form action="">
                                    <div className='containerInfNombId'>
                                        <div class="modal-body">
                                            <p>Nombre</p>
                                            <input type="text" name='nombre' value={formValuesNuevoProducto.nombre} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "nombre")} />
                                        </div>
                                        <div class="modal-body">
                                            <p>Precio</p>
                                            <input type="text" name='precio' value={formValuesNuevoProducto.precio} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "precio")}/>
                                        </div>
                                    </div>
                                    <div className='containerInfPrecCategCanti'>
                                         
                                        <div class="modal-body">
                                            <p>Cantidad</p>
                                             <input type="text" name='cantidad' value={formValuesNuevoProducto.cantidad} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "cantidad")}/>
                                        </div>
                                        <div class="modal-body">
                                            <p>Categoria</p>
                                            <select name="categoria" value={formValuesNuevoProducto.categoria} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "categoria")}>
                                            <option value="camisetas">Camiseta</option>
                                            <option value="vasos" selected>Buzo</option>
                                            <option value="buzos">Vaso</option>
                                            <option value="Gorra">Gorra</option>
                                            <option value="Termos">Botella</option>
                                            </select>
                                        </div> 
                                    </div>
                                    <div class="modal-body">
                                        <h5 class="modal-title">Atributos del producto</h5>
                                    </div>
                                    <div class="modal-body containerInfNombId">
                                        {/* MODAL TALLA */}
                                        <div class="modal-body">
                                            <p>Color</p>
                                            <select name="color" value={formValuesNuevoProducto.color} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "color")}>
                                            <option value="Blanco">Blanco</option>
                                            <option value="Ngergo" selected>Negro</option>
                                            <option value="azul">Azul</option>
                                            <option value="rojo">Rojo</option>
                                            <option value="verde">Verde</option>
                                            </select>
                                    </div> 
                                        <div class="modal-body">
                                                <p>Talla</p>
                                                <select name="talla" value={formValuesNuevoProducto.talla} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "talla")}>
                                                <option value="S">S</option>
                                                <option value="M" selected>M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>                       
                                                </select>
                                        </div>  
                                    </div>
                                    {/* DESCRIPCION */}
                                    <div class="modal-body">
                                            <p>Descripcion</p>
                                            <textarea name="descripcion" id="" cols="30" rows="10" value={formValuesNuevoProducto.descripcion} onChange={({ target }) => actualizacionFormNuevoProducto(target.value, "descripcion")} style={{height: "6em"}}></textarea>
                                    </div> 
                                    <div class="modal-body">
                                        <h5 class="modal-title">Imagenes del producto</h5>
                                        <input type="file" accept="image/jpg, image/png" id='miArchivo' name='file' onChange={(e) => { setFotoProducto(e.target.files[0])}}/> 
                                    </div>
                                    </form>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" class="btn btn-primary" onClick={()=>agregarEditarProducto()}>{msgModalProducto}</button>
                                    </div> 
                                </div>
                            </div>
                </div>

    {/*------------------------------------------------------------------------------------------------------------------------------*/}

    
    {/*------------------------------------------------------------------------------------------------------------------------------*/}

        </>
    )
}
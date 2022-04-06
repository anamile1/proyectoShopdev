import React from 'react'
//import { RoutesApp } from './Routes/RoutesApp'
//ADMINISTRADOR
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './componentes/login/Login'
import { ContenidoMisProductosAdmin } from './componentes/administrador/contenidoMisProductosAdmin/ContenidoMisProductosAdmin'
import { ContenidoPedidosAdmin } from './componentes/administrador/contenidoPedidosAdmin/ContenidoPedidosAdmin'
import { Notificaciones } from './componentes/administrador/notificaciones/Notificaciones'

//CLIENTE
import { ContenidoPrincipalProductos } from './componentes/cliente/contenidoPrincipalProductos/ContenidoPrincipalProductos'
import { ContenidoVentanaProducto } from './componentes/cliente/contenidoVentanaProducto/ContenidoVentanaProducto'
import { HomeUsuario } from './componentes/cliente/homeUsuario/HomeUsuario'
import { ContenidoPago } from './componentes/cliente/contenidoPago/ContenidoPago'


const App = () => {
  return (
    <div>
      < BrowserRouter >
        <Routes>
          {/* ADMINISTRADOR */}
          <Route path="login" exact element={<Login />} />
          <Route path="admin/productos" exact element={<ContenidoMisProductosAdmin />} />
          <Route path="admin/pedidos" exact element={<ContenidoPedidosAdmin />} />
          <Route path="admin/notificaciones" exact element={<Notificaciones />} />

          {/* CLIENTE */}
          <Route path="cliente/listaproductos" exact element={<ContenidoPrincipalProductos />} />
          <Route path="cliente/listaproductos/:codigo" exact element={<ContenidoVentanaProducto />} />
          <Route path="/" exact element={<HomeUsuario />} />
          <Route path='cliente/pago' exact element ={<ContenidoPago/>} />

        </Routes>
      </BrowserRouter >
    </div>
  )
}
export default App; 

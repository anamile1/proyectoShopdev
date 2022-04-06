import React from 'react';

import './MainAdminPedidos.css';

export const MainAdminPedidos = () => {
    return (
        <>
          <main>
                <div className='container'>
                <h1>PEDIDOS</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"># ORDEN</th>
                            <th scope="col">FECHA</th>
                            <th scope="col">CLIENTE</th>
                            <th scope="col">PRODUCTO</th>
                            <th scope="col">VALOR</th>
                            <th scope="col">ESTADO</th>
                            <th scope="col">ACCIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <select name="" id="">
                                    <option value="">Pendiente</option>
                                    <option value="">Finalizado</option>
                                    <option value="">En proceso</option>
                                </select>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash-can"></i>
                    
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <select name="" id="">
                                    <option value="">Pendiente</option>
                                    <option value="">Finalizado</option>
                                    <option value="">En proceso</option>
                                </select>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash-can"></i>
                                
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <select name="" id="">
                                    <option value="">Pendiente</option>
                                    <option value="">Finalizado</option>
                                    <option value="">En proceso</option>
                                </select>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash-can"></i>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </main>  
        </>
    )
}















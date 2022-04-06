import React from 'react';
import './MainHomeCliente.css';

import milegit from '../../../assets/img/milegit.jpg'
import react from '../../../assets/img/react.jpg'
import reactyjs from '../../../assets/img/reactyjs.jpg'
import codigo from '../../../assets/img/codigo.jpg'
import computer from '../../../assets/img/computer.jpg'
import codigoC from '../../../assets/img/codigoC.jpg'

export const MainHomeCliente = () => {
    return (
        <>
            {/* MAIN HOME CLIENTE */}
            

            
            <div className="row ">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src={codigo}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src={milegit}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={reactyjs}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src={codigoC}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={computer}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src={react}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div> 
            
        </>
    )
}
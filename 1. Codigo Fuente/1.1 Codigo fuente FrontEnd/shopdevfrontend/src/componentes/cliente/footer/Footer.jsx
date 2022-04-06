import React from 'react';
import './Footer.css';
import Isotipo from '../../../assets/img/Isotipo.png';
import paypal from '../../../assets/img/paypal.jpg';

export const Footer = () => {
    return (
        <div>
            <body className='body'>
                <footer class="footer">
                    <img class="isotipoFooter" src={Isotipo} alt="Isotipo" />
                    <div>
                        <h3 class="textoFooter">Envios</h3>
                        <h3 class="textoFooter">Cambios y garantias</h3>
                        <h3 class="textoFooter">Terminos y condiciones</h3>
                    </div>
                    <div class="separadorFooter"></div>

                    <div class="circuloIconosFooter"><i class="fab fa-twitter"></i></div>
                    <div class="circuloIconosFooter"><i class="fab fa-facebook-f"></i></div>
                    <div class="circuloIconosFooter"><i class="fab fa-instagram"></i></div>

                    <div class="separadorFooter"></div>
                    <div>
                        <img class="isotipoFooter" src={paypal} alt="paypal" />
                    </div>
                </footer>
            </body>
        </div>
    )
}

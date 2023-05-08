import React from 'react'
import {FaEnvelope, FaHeadphonesAlt} from "react-icons/fa";
import corebizFooter from '../assets/corebiz.svg';
import vtex from '../assets/vtex.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContainer justify-content-center'>
            <div className='footerLocation col-12 col-lg-2'>
                <h2>Ubicación</h2>
                <div className="underline"></div>
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP</p>
                <p>brasil@corebiz.ag</p>
                <p>+55 11 3090 1039</p>
            </div>
            <div className='footerBtns col-12 col-lg-7'>
                <button type="button" className="btn btn-light btnFooter">
                    <FaEnvelope style={{fontSize: '22px'}} />
                    CONTÁCTANOS
              
                </button>
                 
                <button type="button" className="btn btn-light btnFooter">
                    <FaHeadphonesAlt style={{fontSize: '22px'}} />
                    HABLA CON UN CONSULTOR
                </button>
            </div>
            <div className='footerPowered col-12 col-lg-3'>
                <div className='iconCorebiz'>
                    <p>Desarrollado por</p>
                    <img src={corebizFooter}/>
                </div>
                <div className='iconVtex'>
                    <p>Powered by</p>
                    <img src={vtex}/>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react';
import { useState } from 'react';

export const Newsletter = () => {

  const [values, setValues] = useState({
    name: "",
    email: ""
  });

  return (
    <div className="newsletter"> 
        <h1>
        ¡Únete a nuestras novedades y promociones!
        </h1>
        
        <form className="form-inline">
            <div className="form-group mb-2">
                <input 
                required 
                pattern="[A-Za-z]" 
                type="name" 
                className="form-control" 
                id="inputName" 
                placeholder="Ingresa tu nombre"/>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <input 
                required 
                type="email" 
                className="form-control" 
                id="inputEmail" 
                placeholder="Ingresa tu mail"/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Suscribirme</button>
        </form>
    </div>
  )
}

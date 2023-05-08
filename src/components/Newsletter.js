import React from 'react';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';

const messages = {
  req: "Este campo es obligatorio",
  name: "Introduce el formato correcto",
  mail: "Introduce una dirección correcta"
 };

 const patterns = {
  name: /^[A-Za-z]+$/i,
  mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export const Newsletter = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (userInfo) => {

  console.log(userInfo);
  }

  return (
    <div className="newsletter"> 
        <h1>
        ¡Únete a nuestras novedades y promociones!
        </h1>
        
        <form className="newsletterForm" onSubmit={handleSubmit(onSubmit)}>
       
       <div className='inputForm'> 
          <input 
            id="name" 
            type="text"
            placeholder='Ingresa tu nombre' 
            {...register("name", {
              required: messages.req,
              pattern: {
                value: patterns.name,
                message: messages.name
              }
            })}
            />
            {errors.name && <p>{errors.name.message}</p>}
       </div>

       <div className='inputForm'> 
          <input 
            {...register("mail",  { required: true })}
            id="mail" 
        
            placeholder='Ingresa tu mail' 
            {...register("mail", {
              required: messages.req,
              pattern: {
                value: patterns.mail,
                message: messages.mail
              }
            })}
            />
            {errors.mail && <p>{errors.mail.message}</p>}
        </div>

          <input type="submit"/>
         </form>
    </div>

    
  )
}

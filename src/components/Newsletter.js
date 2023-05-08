import React from 'react';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const messages = {
  req: "Este campo es obligatorio",
  username: "Introduce el formato correcto",
  mail: "Introduce una dirección correcta"
};

const patterns = {
  username: /^[A-Za-z]+$/i,
  mail: /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
};

export const Newsletter = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (userInfo) => {
    console.log(userInfo);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    };

    await fetch('https://fakestoreapi.com/users', requestOptions)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        if (response.status === 200) {
          console.log("Se añadió con éxito")
          return setShowAlert(true);
        }

      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  setTimeout(() => {
    setShowAlert(false);
  }, 2000);

  return (
    <div className="newsletter">
      <h1>
        ¡Únete a nuestras novedades y promociones!
      </h1>
      <Alert  show={showAlert} className="alertSuccessNews" variant="success">¡Se ha registrado correctamente!</Alert>
      <form className="newsletterForm" onSubmit={handleSubmit(onSubmit)}>
        <div className='inputForm'>
          <input
            name="username"
            type="text"
            placeholder='Ingresa tu nombre'
            {...register("username", {
              required: messages.req,
              pattern: {
                value: patterns.username,
                message: messages.username
              }
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div className='inputForm'>
          <input
            {...register("mail", { required: true })}
            name="mail"

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

        <input type="submit"  value="Suscribirme"/>
   
      </form>

    </div>


  )
}
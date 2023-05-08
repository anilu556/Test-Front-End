import React, { useEffect, useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProductSlider = (props) => {

  const addProduct = product => {
    if (product) {
      props.updateCart()
    }
  }

  var settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    loop: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      }
    ]
  };

  const [productData, setProductData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const url = "https://fakestoreapi.com/products";

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data)
        setProductData(data);
      } catch (err) {
        console.error(err);
      }
    }

    getData();

  }, []);

  return (

    <div className="productSlider">
      <div className="productSliderTitle">
        <h2>Más Vendidos</h2>
        <div className="underline"></div>
      </div>

      <Slider {...settings}>

        {productData.map(product => (

          <Card>
            <div className="offTag"></div>
            <p className="offText">OFF</p>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                Calificación: <span className="rating"> {product.rating.rate}</span>
              </Card.Text>
              <Card.Text>
                <p className='price'>por ${product.price}</p>
              </Card.Text>
              <Button onClick={() => addProduct(product)} variant="primary">COMPRAR</Button>
            </Card.Body>
          </Card>
        ))}
      </Slider>

    </div>

  )

}
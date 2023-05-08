import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner from '../assets/banner.jpg';
import BannerMob from '../assets/bannerMob.jpg'

export const MainCarousel = () => {
  return (
    <div className="mainCarousel">
        <Carousel controls={false}>
            <Carousel.Item>
                <img
                className="w-100 sliderImg"
                src={Banner}
                alt="First slide"
                />
                <img 
                  className=" w-100 sliderImgMob"
                  src={BannerMob}
                  alt="First slide"
                />
                <Carousel.Caption>
                <h3>¡Hola! ¿Qué es lo que buscas?</h3>
                <p>¿Crear o migrar tu comercio electrónico?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100 sliderImg"
                src={Banner}
                alt="Second slide"
                />
                <img 
                  className=" w-100 sliderImgMob"
                  src={BannerMob}
                  alt="First slide"
                />
                <Carousel.Caption>
                <h3>¡Hola! ¿Qué es lo que buscas?</h3>
                <p>¿Crear o migrar tu comercio electrónico?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100 sliderImg"
                src={Banner}
                alt="Third slide"
                />
                <img 
                  className=" w-100 sliderImgMob"
                  src={BannerMob}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>¡Hola! ¿Qué es lo que buscas?</h3>
                  <p>¿Crear o migrar tu comercio electrónico?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

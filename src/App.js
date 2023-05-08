import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainCarousel } from './components/MainCarousel';
import { ProductSlider } from './components/ProductSlider';
import { Newsletter } from './components/Newsletter';
import { useState, useEffect } from 'react';

function App() {

  const [countProducts, setCountProducts] = useState(0);
  const cartQty = JSON.parse(localStorage.getItem("itemCartCount"));

  useEffect(() => {
    if (localStorage.getItem("itemCartCount")) {
      setCountProducts(cartQty)
    }
  }, []);


  const updateCart = () => {
    setCountProducts(countProducts + 1)
    localStorage.setItem("itemCartCount", countProducts + 1)
  }

  // console.log({countProducts})
  
  return (
    <>
      <Header
        countProducts={countProducts}
      />
      <MainCarousel />
      <ProductSlider
        countProducts={countProducts}
        updateCart={updateCart}
      />
      <Newsletter />
      <Footer />
    </>

  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainCarousel } from './components/MainCarousel';
import { ProductSlider } from './components/ProductSlider';
import { Newsletter } from './components/Newsletter';
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [countProducts, setCountProducts] = useState(9);

  return (
    <>
      <Header 
        products={products}
        setProducts={setProducts}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <MainCarousel/>
      <ProductSlider
        products={products}
        setProducts={setProducts}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Newsletter />  
      <Footer />
    </>

  );
}

export default App;

import React from 'react'
import logo from '../assets/logo.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaSearch, FaShoppingCart, FaUserAlt, FaAlignJustify} from "react-icons/fa";

export const Header = ({countProducts, setCountProducts}) => {


  return (
    <header>
        <nav className="navbar justify-content-center">
            <div className="col-3 logo">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="181" className="d-inline-block align-top" alt=""/>
                </a>
            </div>
            <div className="col-5 searchBar">
                <InputGroup>
                    <Form.Control
                    placeholder="¿Qué estás buscando?"
                    aria-label="search"
                    aria-describedby="search"
                    />
                    <InputGroup.Text>
                        <FaSearch style={{fontSize: '22px'}}/>
                    </InputGroup.Text>
                </InputGroup>
            </div>
            <div className="col-3 headerIcons d-flex">
                <div className="myAccount">
                    <FaUserAlt style={{fontSize: '22px'}}/>
                    <span>Mi Cuenta</span>
                </div>
                <div className="miniCart">
                    <FaShoppingCart style={{fontSize: '22px'}}/>
                    <div className="miniCartQuantity">
                        <span className="cartQuantity">{countProducts}</span>
                    </div> 
                </div>
            </div>
        </nav>


        <nav className='navbarMobile'>
            <div className="col-2 menuMobile">
                <FaAlignJustify />
            </div>
            <div className="col-8 logo">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="181" className="d-inline-block align-top" alt=""/>
                </a>
            </div>
            <div className="col-2 miniCart">
                <FaShoppingCart style={{fontSize: '22px'}}/>
                <div className="miniCartQuantity">
                    <span className="cartQuantity">1</span>
                </div> 
            </div>
        </nav>
    </header>
  )
}

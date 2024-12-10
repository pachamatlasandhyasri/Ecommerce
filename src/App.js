import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './Carousel';
import Slider from 'react-slick';
import SearchBar from './SearchBar';
import Products from './Products';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:5000/api/products')
      .then(response=> {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
    }, []);
  return (
    <div>
      

      <div class="nav">
        <a href="some">Login</a>
        <a href="some">Cart</a> 
       {/* <link to="./Cart">Cart</link> */}
        <a href="ome">Contact</a>
        <div>
          <SearchBar  />
        </div>
        <div>
        <a class="brand" href="brand">Shopify</a>
        </div>
      </div>

      <div class='main-container'>
      <br />
        
        
        
      </div>
      <br/>
      <div>
      <Carousel />
      </div>
      <div>
      <h1>Our Products</h1>
      <Products products={products} />
      </div>
      <br/>
      <footer class="footer">
        <div class='row'>
        <div class="foot-container">
          <div class="footer-links">
          <h4>Quick Links</h4>
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Service</a>
          <a href="">Contact</a>
          <a href="">FAQ</a>
          </div>

          <div class="footer-links">
          <h4>Contact Us</h4>
          <a href="">+916483291739</a>
          <a href="">Info@odonil.com</a>
          <a href="">Madhapur area,<br/> Hyderabad</a>
          </div>

          <div class="footer-links">
          <h4>Follow Us</h4>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">YouTube</a>
          </div>
        </div>
        </div>

      </footer>
    </div>
  );
};

export default App;


import './App.css';
import React from 'react';
import ListProduct from './component/ListProduct';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Introduce from './component/Introduce';
import About from './component/About';
import ProductDetail from './component/ProductDetail';
import Contact from './component/Contact';
import CrudProduct from './component/crud/CrudProduct';
import AddProduct from './component/crud/AddProduct';
import UpdateProduct from './component/crud/UpdateProduct';
import ViewProduct from './component/crud/ViewProduct';
function App() {
  return (
    <div>
    <Router>    
            <div className="container">
                <Switch> 
                        <Route exact path = "/" component = {Introduce}/>
                        <Route path = "/about" component = {About}/>
                        <Route path = "/products" component = {ListProduct}/>
                        <Route path = "/productDetail/:name" component = {ProductDetail}/>
                        <Route path = "/contact" component = {Contact}/>

                      <Route exact path = "/home" component = {CrudProduct}/>
                      <Route path = "/product" component = {CrudProduct}/>

                      <Route path = "/add-product/:id" component = {AddProduct}/>
                      <Route path = "/update-product" component = {UpdateProduct}/>
                      <Route path = "/view-product/:id" component = {ViewProduct}/>

                </Switch>
            </div>  

    </Router>
  </div>
  );
}

export default App; 

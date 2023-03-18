import React, { Component } from 'react'
import ProductService from '../js/ProductService';
import Header from './Header';
import Footer from './Footer';

import './css/crud.css';

class CrudProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
                product: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct= this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id)
        .then( res => {
            this.setState({
            product: this.state.product.filter(product => product.id !== id)
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    viewProduct(id){
        this.props.history.push(`/view-product/${id}`);
    }

    editProduct(id){
        this.props.history.push(`/add-product/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ product: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/_add');
    }

    render() {
        return (
            <div>
                <div className='header-crud'>
                 <Header></Header>

                 <h2 className="text-center">Product List</h2>

                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row table-container">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product name </th>
                                    <th> brand </th>
                                    <th> material</th>
                                    <th> length</th>
                                    <th> makeStyle</th>
                                    <th> color</th>
                                    <th> expiry</th>
                                    <th> Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.product.map(
                                            product => 
                                        <tr key = {product.id}>
                                             <td> {product.name} </td>  
                                             <td> {product.brand} </td>  
                                             <td> {product.material} </td>   
                                             <td> {product.length} </td>   
                                             <td> {product.makeStyle} </td>   
                                             <td> {product.color} </td>   
                                             <td> {product.expiry} </td>   

                                             <td>
                                                 <button style={{padding: '15px'}} onClick={ () => this.editProduct(product.id)} className="btn btn-info">Update </button>
                                                 <button style={{padding: '15px'}} onClick={ () => this.deleteProduct(product.id)} className="r">Delete </button>
                                                 <button style={{padding: '15px'}} onClick={ () => this.viewProduct(product.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
                 
                 <Footer></Footer>     

            </div>

        )
    }
}

export default CrudProduct
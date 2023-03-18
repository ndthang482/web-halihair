import React, { Component } from 'react'
import ProductService from '../js/ProductService';

class UpdateProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            brand: '',
            material: '',
            length: '',
            makeStyle: '',
            color: '',
            expiry:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeMaterialHandler = this.changeMaterialHandler.bind(this);
        this.changeLengthHandler = this.changeLengthHandler.bind(this);
        this.changMakeStyleHandler = this.changMakeStyleHandler.bind(this);
        this.changeColorHandler = this.changeColorHandler.bind(this);
        this.changeExpiryHandler = this.changeExpiryHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( (res) =>{
            let product = res.data;
            this.setState({ name: product.name,
                brand: product.brand,
                material: product.material,
                length : product.length,
                makeStyle: product.makeStyle,
                color: product.color,
                expiry: product.expiry
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let product = {name: this.state.name, brand: this.state.brand, material: this.state.material, length: this.state.length, makeStyle: this.state.makeStyle,
            color: this.state.color, expiry: this.state.expiry};
        console.log('product => ' + JSON.stringify(product));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProductService.updateProduct(product, this.state.id).then( res => {
            this.props.history.push('/product');
        });
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeBrandHandler= (event) => {
        this.setState({brand: event.target.value});
    }

    changeMaterialHandler= (event) => {
        this.setState({material: event.target.value});
    }

    changeLengthHandler= (event) => {
        this.setState({length: event.target.value});
    }
    changMakeStyleHandler= (event) => {
        this.setState({makeStyle: event.target.value});
    }
    changeColorHandler= (event) => {
        this.setState({color: event.target.value});
    }
    changeExpiryHandler= (event) => {
        this.setState({expiry: event.target.value});
    }

    cancel(){
        this.props.history.push('/product');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Brand: </label>
                                            <input placeholder="Brand" name="brand" className="form-control" 
                                                value={this.state.brand} onChange={this.changeBrandHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Material: </label>
                                            <input placeholder="Material" name="material" className="form-control" 
                                                value={this.state.material} onChange={this.changeMaterialHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Length: </label>
                                            <input placeholder="Length" name="length" className="form-control" 
                                                value={this.state.length} onChange={this.changeLengthHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> makeStyle: </label>
                                            <input placeholder="makeStyle" name="makeStyle" className="form-control" 
                                                value={this.state.makeStyle} onChange={this.changMakeStyleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Color: </label>
                                            <input placeholder="Color" name="color" className="form-control" 
                                                value={this.state.color} onChange={this.changeColorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Expiry: </label>
                                            <input placeholder="Expiry" name="expiry" className="form-control" 
                                                value={this.state.expiry} onChange={this.changeExpiryHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
export default UpdateProduct
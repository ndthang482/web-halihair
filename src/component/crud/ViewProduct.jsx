import React, { Component } from 'react'
import ProductService from '../js/ProductService';

class ViewProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Name: </label>
                            <div> { this.state.product.name }</div>
                        </div>
                        <div className = "row">
                            <label> Brand: </label>
                            <div> { this.state.product.brand }</div>
                        </div>
                        <div className = "row">
                            <label> Material: </label>
                            <div> { this.state.product.material }</div>
                        </div>
                        <div className = "row">
                            <label> Length: </label>
                            <div> { this.state.product.length }</div>
                        </div>
                        <div className = "row">
                            <label> MakeStyle: </label>
                            <div> { this.state.product.makeStyle }</div>
                        </div>
                        <div className = "row">
                            <label> Color: </label>
                            <div> { this.state.product.color }</div>
                        </div>
                        <div className = "row">
                            <label> Expiry: </label>
                            <div> { this.state.product.expiry }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProduct
import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            image_url: 0,
            editId: null,
        }
    }

    addProduct = () => {
        axios
        .post("/api/inventory", {
            name: this.state.name,
            price: this.state.price,
            image_url: this.state.image_url,
        })
        .then((res) => {
        this.setState({
            name: res.data,
            price: res.data,
            image_url: res.data,
            });
            this.props.retrieveInventory().then(() => {
            this.resetState();
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    updateProduct = () => {
        axios
            .put(`/api/inventory/${this.state.editId}`, {
                name: this.state.name,
                price: this.state.price,
                image_url: this.state.image_url,
            })
            .then(() => {
                this.props.retrieveInventory().then(() => {
                    this.resetState();
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidUpdate(oldProps) {
        if (oldProps.selectedProduct !== this.props.selectedProduct) {
          //get the product from props.inventoryList
        const { id, name, price, image_url } = this.props.inventoryList.find(
            (product) => product.id === this.props.selectedProduct
        );
        this.setState({
            editId: id,
            name,
            price,
            image_url,
        });
        }
    }

    handleInput = (e) => 
        this.setState({        
            [e.target.name]: e.target.value }) 
            resetState = () =>
            this.setState({name:' ', price:0, image_url:'', editId: null});

    render() {
        console.log(this.state);
        const {name, price, image_url} = this.state;
        return (
            <div className="form">
                
                <div className="imageHolder">
                    {!image_url ?
                    <img className="imageH" alt="noImage" src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"/>
                    : <img className="imageH" alt="prod" src={`${image_url}`}/>
                    }
                </div>

                <input placeholder="Product Name" name="name" value={name} onChange={this.handleInput}/>
                <input placeholder="0" name="price" value={price} onChange={this.handleInput}/>
                <input placeholder="Image URL" name="image_url" value={image_url} onChange={this.handleInput}/>
                <button onClick={this.resetState}>Cancel</button>
                {this.state.editId == null ? (
                <button onClick={this.createInventory}>Add to Inventory</button>
                ) : (
                <button onClick={this.updateProduct}>Save Changes</button>
                )}
            </div>
        )
    }
}
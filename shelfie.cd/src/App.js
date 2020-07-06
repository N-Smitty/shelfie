import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      selectedProduct: null
    }
  }

  componentDidMount = () => {
    this.retrieve_inventory()
  }

    retrieve_inventory = () => {
      console.log('you did it')
          axios.get('/api/inventory')
          .then(res => {
            this.setState({
              inventory: res.data 
            })
          })
        .catch(err => console.log(err))
    };

    selectHandler = (product) => {
      this.setState({
        selectedProduct: product
      })
    }
  
render() {
  console.log(this.state)

  return (
    <div className='App'>
      <Header/>
      <div className='dash'>
      <Dashboard inventoryList={this.state.inventory} retrieveInventory={this.retrieveInventory} selectHandler={this.selectHandler}/>
      <Form retrieveInventory={this.retrieveInventory} selectedProduct={this.state.selectedProduct} inventoryList={this.state.inventory}/>
      </div>
    </div>
  )
}
}


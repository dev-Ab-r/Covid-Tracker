import React, { Component } from 'react';
import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

export class App extends Component {
  state={
    data:{},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }
  

  render() {
    const {data} = this.state;
    console.log(data);
    return (
      <div className={styles.container}>
          <Cards data ={data}/>
          <CountryPicker/>
          <Charts/>
      </div>
    )
  }
}

export default App

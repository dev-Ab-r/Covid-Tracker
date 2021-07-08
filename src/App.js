import React, { Component } from 'react';
import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import Image from './images/image.png';

export class App extends Component {
  state={
    data:{},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }

   handleCountryChabge= async(country) =>{
    console.log(country);
    const fetchedData = await fetchData(country)
    this.setState({data:fetchedData,country:country})
  }
  

  render() {
    const {data,country} = this.state;
    //console.log(data);
    return (
      <div className={styles.container}>
          <img  src ={Image} alt="Covid" className={styles.img}/>
          <Cards data ={data}/>
          <CountryPicker handleCountryChabge ={this.handleCountryChabge}/>
          <Charts country ={country} data ={data}/>
      </div>
    )
  }
}

export default App

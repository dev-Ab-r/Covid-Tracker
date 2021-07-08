import React,{useState,useEffect} from 'react';
import { NativeSelect,FormControl, StylesProvider } from '@material-ui/core';
import {fetchAllCountries} from '../../api';
import styles from './CountryPicker.module.css';


const CountryPicker = ({handleCountryChabge})=>{
    const[countries,setCountries]=useState([])

    useEffect(()=>{
        const fetchCountries = async ()=>{
            setCountries(await fetchAllCountries())
        }
        fetchCountries();
    },[setCountries])
//console.log(countries);
    return(
       
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChabge(e.target.value)}>
                <option value="">Global</option>
                {
                    countries.map((country,i)=><option className={styles.formControl} key ={i}value={country.name}>{country.name}</option>)
                }
                
            </NativeSelect>
        </FormControl>
    )
}


export default CountryPicker;
import React,{useState,useEffect} from 'react';
import { NativeSelect,FormControl, StylesProvider } from '@material-ui/core';
import {fetchAllCountries} from '../../api';

const CountryPicker = ()=>{
    const[countries,setCountries]=useState([])

    useEffect(()=>{
        const fetchCountries = async ()=>{
            setCountries(await fetchAllCountries())
        }
        fetchCountries();
    },[setCountries])
console.log(countries);
    return(
       
        <FormControl className={StylesProvider.formControl}>
            <NativeSelect>
                {
                    countries.map((country,i)=><option key ={i}value={country.name}>{country.name}</option>)
                }
                
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
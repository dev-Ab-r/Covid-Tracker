import axios from "axios";

const url='https://covid19.mathdro.id/api';

  export const fetchData = async()=>{
    try{
        const {data :{confirmed ,recovered,deaths,lastupdate}} = await axios.get(url);
       // console.log(confirmed.value)
        return {confirmed,recovered,deaths,lastupdate};
    }catch(error){

    }
  }

  export const fetchDailyData = async ()=>{
    try{
      const {data} = await axios.get(`${url}/daily`)
       const modiFiedData = data.map((dailyData)=>({
         confirmed:dailyData.confirmed.total,
         deaths:dailyData.deaths.total,
         date:dailyData.reportDate,

       }))
       return modiFiedData;
    }catch(error){

    }
    
  }

  export const fetchAllCountries = async ()=>{
    try{
      const {data:{countries}} = await axios.get(`${url}/countries`)
      return countries ;
    }catch (error){

    }
   
  }
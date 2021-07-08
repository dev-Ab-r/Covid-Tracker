import axios from "axios";

const url='https://covid19.mathdro.id/api';
//const indiaUrl ='https://api.covid19india.org/v4/min/data.min.json';

  export const fetchData = async(country)=>{
    let defaultUrl = url;
    if(country){
      defaultUrl =`${url}/countries/${country}`
    }
    try{
      // const data = await axios.get(url);
      // console.log(data);
        const {data :{confirmed ,recovered,deaths,lastupdate}} = await axios.get(defaultUrl);
        //const data= await axios.get(defaultUrl);
        // const {data:{WB:{delta:{tested}}}} = await axios.get(indiaUrl);

         //console.log(data);

        // for(let key in data){
        //   console.log(key);
        // }
       
        return {confirmed,recovered,deaths,lastupdate};
    }catch(error){

    }
  }

  export const fetchDailyData = async ()=>{
    try{
      const {data} = await axios.get(`${url}/daily`)
     // console.log(data)
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
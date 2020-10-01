import axios from 'axios';
const url ='https://covid19.mathdro.id/api';
export const fetchData=async(country)=>{
    let chanagableUrl=url;
   
    if(country){
        chanagableUrl=`${url}/countries/${country}`;
    }
try{
const {data} = await axios.get(chanagableUrl);
const modifiedData={
    confirmed:data.confirmed,
    deaths:data.deaths,
    recovered:data.recovered,
    lastUpdate:data.lastUpdate,

}
//Another way to write the code
{/*  
const {data:{confirmed,deaths,recovred,lastUpdate}}=awit axios.get(url);
return{confirmed,deaths,recovered,lastUpdate}

*/}
return modifiedData;
}catch(error){
console.log(error)
}
}

export const fetchDailyData=async()=>{
    try{

        const {data} =await axios.get(`${url}/daily`);
       
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }))

        return modifiedData;
        
    }catch(error){
        console.log(error)
    }
}

export const fetchCountryName=async()=>{
    try{
const {data:{countries}} = await axios.get(`${url}/countries`);

return (countries.map((country)=>country.name
))

    }catch(error){
        console.log(error)
    }
}
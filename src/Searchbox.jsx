import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){

    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="51dd047f5b4856baf7bc9f8a920dfd12"

    let [City,setCity]=useState("");

    let getWeatherInfo=async()=>{
        let response=await fetch(`${API_URL}?q=${City}&appid=${API_KEY}`);
        let jsonresponse=await response.json();
        console.log(jsonresponse);
        let info={
            city:City,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLike:jsonresponse.main.feels_like,
        };
        return info;
    }

 
    let handleChange=(event)=>{
        setCity(event.target.value)
    }
    let handleSubmit=async(event)=>{
        console.log(City);
        event.preventDefault();
        setCity("");
        let result=await getWeatherInfo();
        updateInfo(result);
    }

    return(
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
            <h3>Search weather for a city</h3>
            <TextField id="City" label="City Name" variant="standard" value={City} onChange={handleChange} required/>
            <Button variant="contained" type='Submit'>Search</Button>
            </form>
        </div>
    )
}
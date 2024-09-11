import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./Searchbox";

export default function WeatherApp(){
    let [WeatherInfo,setWeatherInfo]=useState({
            city:"default",
            temp:24,
            tempMin:18,
            tempMax:30,
            humidity:45,
            feelsLike:20,
    });
    let updateinfo=(info)=>{
        setWeatherInfo(info);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateinfo}/>
            <InfoBox Info={WeatherInfo}/>
        </div>
    )
}
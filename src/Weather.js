import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Weather = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleGetWeather = async () => {
        const options = {
            method: 'GET',
            url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
            params: { city: location },
            headers: {
                'X-RapidAPI-Key': 'fec307e567msh8973332cb7d2418p1bb94ajsnd750f07c108c',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setWeather(response.data);
            console.log(response.data)
        } catch (error) {
            toast.error('Enter city Name properly', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }






    return (
        
        <div className='maindiv'>
            <div class="search-box">
                <button onClick={handleGetWeather} class="btn-search"><FontAwesomeIcon icon={faMagnifyingGlass} bounce /></button>
                <input type="text" value={location} onChange={handleLocationChange} class="input-search" />
            </div>
            {weather && (
               <table className='table  table-hover glassmorphism'>
               <tr>
                   <th colspan="2">{location}</th>
               </tr>
               <tr>
                   <th>Cloud Coverage</th>
                   <td>{weather.cloud_pct}</td>
               </tr>
               <tr>
                   <th>Humidity</th>
                   <td>{weather.humidity}</td>
               </tr>
               <tr>
                   <th>Wind Speed</th>
                   <td>{weather.wind_speed}</td>
               </tr>
               <tr>
                   <th>Wind Degrees</th>
                   <td>{weather.wind_degrees}</td>
               </tr>
               <tr>
                   <th>Current Temperature</th>
                   <td>{weather.temp}</td>
               </tr>
               <tr>
                   <th>Minimum Temperature</th>
                   <td>{weather.min_temp}</td>
               </tr>
               <tr>
                   <th>Maximum Temperature</th>
                   <td>{weather.max_temp}</td>
               </tr>
               <tr>
                   <th>Sunrise</th>
                   <td>{weather.sunrise}</td> 
               </tr> 
               <tr> 
                   <th>Sunset</th> 
                   <td>{weather.sunset}</td> 
               </tr> 
           </table> 
           
            )}
        </div>
    );
};

export default Weather;

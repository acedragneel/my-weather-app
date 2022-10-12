import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data,setData] = useState({})
  const [zipcode,setZipcode] = useState('')
  // const [countryCode,setCountryCode] = useState('')

  // const url = 'https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countryCode}&appid=bd29b4e7a9dc1c207749c31f2ff21dd3'
  const urlcity = `https://api.openweathermap.org/data/2.5/weather?q=${zipcode}&units=imperial&appid=bd29b4e7a9dc1c207749c31f2ff21dd3`
  
  const searchLocation = (event) =>{
    if(event.key==='Enter'){
      axios.get(urlcity).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setZipcode('')
    }
  }

  return (
    <div className="app">
      <div className='search'>
          <input 
          value={zipcode}
          onChange={event => setZipcode(event.target.value)}
          onKeyPress = {searchLocation}
          placeholder ='Enter Location'
          type="text"/>
          {/* <input 
          value={countryCode}
          onChange={event => setCountryCode(event.target.value)}
          placeholder ='US'
          type="text"/>
          <button onClick={searchLocation}> Submit</button> */}
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && 
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}         
              <p>Humidity</p>         
              </div>
              <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}  
                <p>Wind Speed</p>
              </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;

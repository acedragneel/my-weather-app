import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data,setData] = useState({})
  const [zipcode,setZipcode] = useState('')
  const [countryCode,setCountryCode] = useState('')

  const url = 'https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countryCode}&appid=bd29b4e7a9dc1c207749c31f2ff21dd3'

  const searchLocation = (event) =>{
    if(event.key==='Enter'){
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className="app">
      <div className='search'>
          <input 
          value={zipcode}
          onChange={event => setZipcode(event.target.value)}
          placeholder ='02120'
          type="text"/>
          <input 
          value={countryCode}
          onChange={event => setCountryCode(event.target.value)}
          placeholder ='US'
          type="text"/>
          <button onClick={searchLocation}> Submit</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p>Humidity</p>            
          </div>
          <div className="wind">
            <p className="bold">12MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

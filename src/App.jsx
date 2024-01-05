import axios from 'axios';
import { useState } from 'react';
import { images } from './helpers/images';
import notFound from './images/not-found.png';
import './App.css';

const API_KEY = '4c7176ba57e1d9c425455f307bbc4354';

function App() {

  const [city, setCity] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [heightContainer, setheightContainer] = useState('105px')

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const handleSearch = (event) => {
    setCity(event.target.value);
    if(event.target.value.length === 0){
      setheightContainer('105px')
    }
  }

  const onSearch = () => {
    axios.get(URL).then((response) =>{
      setData(response.data)
      setError(false)
      setheightContainer('605px');
    })
    .catch(function (){
      setError(true)
      setheightContainer('505px');
    })
  }

  return (
    <div className="container" style={{"height": `${heightContainer}`}}>
      <div className="search-box">
        <i className="fa-solid fa-location-dot"></i>
        <input 
          type="text" 
          placeholder='Enter your location' 
          onChange={ handleSearch } 
          value={ city }
        />
        <button onClick={ onSearch } className='fa-solid fa-magnifying-glass' ></button>
      </div>

      {
        error && 
        <div className="not-found">
          <img src={ notFound } alt="not-found" />
          <p>Oops! Invalid Location</p>
        </div>
      }

      {
        (!error && data) &&
        <>
          <div className="weather-box">
            <i className={ images(data.weather[0].main) }></i>
            <p className="temperature">{parseInt((data.main.temp) - 273.15)}<span>°C</span></p>
            <p className="description">{data.weather[0].description}</p>
          </div>

          <div className="weather-details">
            <div className="humidity">
              <i className="fa-solid fa-water"></i>
              <div className="text">
                <span>{data.main.humidity}%</span>
                <p>Humidity</p>
              </div>
            </div>
            <div className="wind">
              <i className="fa-solid fa-wind"></i>
              <div className="text">
                <span>{data.wind.speed}Km/h</span>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default App

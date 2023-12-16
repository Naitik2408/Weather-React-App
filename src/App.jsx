import { useEffect, useState } from 'react'
import './App.css'
import Error from './components/Error';
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentWeather, setLocationWeather} from './stores/Apidata'
import Temprature from './components/Temprature';
import WeatherDetails from './components/WeatherDetails';
import ExtraDetails from './components/ExtraDetails';

function App() {
  const dispatch= useDispatch();
  const apis = useSelector(state =>state.api)
  const [search, setSearch] = useState('Mumbai')

  function capitalizeFirstLetter(str) {
    setSearch(str.charAt(0).toUpperCase() + str.slice(1))
  }

  useEffect(()=>{
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`;
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key':     '9a23212535mshfac5cefcd52d1acp10edc5jsnebf8261b19a0',
		    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	    }
    };

    async function getData(){
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        dispatch(setCurrentWeather(result.current))
        dispatch(setLocationWeather(result.location))
      } catch (error) {
        console.log('invalid place')
      }
    }
    getData()
    capitalizeFirstLetter(search)
  },[search])
  let timeout;


  return (
    
      <div className='container'>
        <div className='image_section'>
          {(!apis[0].current) ? <Error/> : <Temprature/>}
        </div>
        <div className='search_section'>
          <input 
          type="text"
          placeholder='Search City'
          onChange={
            (e)=>{
            clearTimeout(timeout);
            timeout=setTimeout(() => {
              setSearch(e.target.value)
            }, 800)
          }}
           />
           <div className='weather_details'>
            <div className='weather_title'>Weather Details</div>
            {(!apis[1].location) ? " ": <WeatherDetails/>}
            <hr />
            <div className='weather_title'>Extra details</div>
            {(!apis[1].location) ? " ": <ExtraDetails/>}
            <hr />
           </div>
        </div>
      </div>
  )
}

export default App

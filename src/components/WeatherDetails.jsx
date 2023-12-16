import React from 'react'
import '../componentsCss/WeatherDetails.css'
import {useSelector} from 'react-redux'

function WeatherDetails() {
    const apis = useSelector(state =>state.api)
  return (
    <div className='weather_details_info'>
            <div className='W_element'>
              <div>Name</div>
              <div>{apis[1].location.name}</div>
            </div>
            <div className='W_element'>
              <div>Country</div>
              <div>{apis[1].location.country}</div>
            </div>
            <div className='W_element'>
              <div>Temprature °C</div>
              <div>{apis[0].current.temp_c}°C</div>
            </div>
            <div className='W_element'>
              <div>Temprature °F</div>
              <div>{apis[0].current.temp_f}°F</div>
            </div>
            <div className='W_element'>
              <div>Humidity</div>
              <div>{apis[0].current.humidity}</div>
            </div>
          </div>
  )
}

export default WeatherDetails

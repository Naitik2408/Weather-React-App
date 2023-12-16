import React from 'react'
import {useSelector} from 'react-redux'
import '../componentsCss/WeatherDetails.css'

function ExtraDetails() {
    const apis = useSelector(state =>state.api)
  return (
    <div className='weather_details_info'>
            <div className='W_element'>
              <div>Latitude</div>
              <div>{apis[1].location.lat}°</div>
            </div>
            <div className='W_element'>
              <div>Longitude</div>
              <div>{apis[1].location.lon}°</div>
            </div>
            <div className='W_element'>
              <div>Wind Direction</div>
              <div>{apis[0].current.wind_dir}</div>
            </div>
            <div className='W_element'>
              <div>Wind speed in kph</div>
              <div>{apis[0].current.wind_kph} km/h</div>
            </div>
            <div className='W_element'>
              <div>Date and Time</div>
              <div>{apis[1].location.localtime}</div>
            </div>
          </div>
  )
}

export default ExtraDetails

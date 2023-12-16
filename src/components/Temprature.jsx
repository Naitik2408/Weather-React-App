import React from 'react'
import '../componentsCss/Temprature.css'
import {useSelector} from 'react-redux'

function Temprature() {
    const apis = useSelector(state =>state.api)
  return (
    <div className='tempratures'>
        <div className='temp_one'>
            <div className='temp_num'>{apis[0].current.temp_c}°c</div>
            <div className='location'>{apis[1].location.name}</div>
            <i className="fa-solid fa-cloud"></i>
        </div>
    </div>
  )
}

export default Temprature

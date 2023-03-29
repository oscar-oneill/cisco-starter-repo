import React from 'react'
import Address from '../Address/Address'
import style from './Exhibit.module.css'

const Exhibit = ({ color, fontSize, borderWidth, title, requestURL }) => {
  return (
    <div className={style['exhibit-card']} 
      style={{ 
        backgroundColor: `${color}`, 
        fontSize: `${fontSize}`, 
        borderWidth: `${borderWidth}`
      }}>
      <span>{title}</span>
      
      <Address
        requestURL={requestURL}
      />


    </div>
  )
}

export default Exhibit
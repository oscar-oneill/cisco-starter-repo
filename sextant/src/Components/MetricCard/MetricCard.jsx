import React from 'react'
import style from './MetricCard.module.css'

const MetricCard = ({ color, fontSize, borderWidth, title }) => {
  return (
    <div className={style['metric-card']} 
      style={{ 
        backgroundColor: `${color}`, 
        fontSize: `${fontSize}`, 
        borderWidth: `${borderWidth}`
      }}>
      {title}
    </div>
  )
}

export default MetricCard
import React from 'react'
import MetricCard from '../MetricCard/MetricCard'
import style from './Exhibit.module.css'
import { metrics } from '../../utilities/helpers'

const Exhibit = () => {
    return (
        <div className={style['exhibit-container']}>
            <h2>Metrics Overview - 199.199.1.111</h2>

            <div className={style['metrics-container']}>
                {metrics.map((metric) => {
                    return (
                        <MetricCard                        
                            title={metric.title}
                            color={metric.color}
                            fontSize={metric.fontSize}
                            borderWidth={metric.borderWidth}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Exhibit
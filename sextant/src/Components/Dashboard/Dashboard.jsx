import Exhibit from '../Exhibit/Exhibit'
import style from './Dashboard.module.css'
import { exhibits } from '../../utilities/helpers'
import Latency from '../Latency/Latency'

const Dashboard = () => {

    return (
        <div className={style['dashboard-container']}>
            <h2>Data Overview</h2>
            <div className={style['exhibits-container']}>
                {exhibits.map((exhibit, i) => {
                    return (
                        <Exhibit
                            key={i}                     
                            title={exhibit.title}
                            color={exhibit.color}
                            fontSize={exhibit.fontSize}
                            borderWidth={exhibit.borderWidth}
                            requestURL={exhibit.requestURL}
                        />
                    )
                })}
            </div>

            <h2>Latency</h2>
            <div className={style['exhibits-container']}>
                <Latency/>
            </div>
        </div>
    )
}

export default Dashboard
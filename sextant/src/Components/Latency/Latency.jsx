import { useState } from 'react'
import style from './Latency.module.css'

const Latency = () => {
    const [latency, setLatency] = useState(null);
    const ws = new WebSocket('ws://localhost:55455')
    ws.onmessage = (message) => {
        setLatency(new Date().getTime() - message.data)
    }

    return (
        <div className={style.latency}>{latency} ms</div>
    )
}

export default Latency
import { useEffect, useState } from 'react'
import axios from 'axios'
import style from '../Address/Address.module.css'

const Address = ({ requestURL }) => {
    const [address, setAddress] = useState(null)

    useEffect(() => {
        axios.get(requestURL)
        .then((response) => {
            console.log(response)
            setAddress(response.data.ip)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [requestURL])



    return (
        <span className={style.address}>{address ? address : 'Loading...'}</span>
    )
}

export default Address
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function useRequestData(url, initialState, lastData) {
    const history = useHistory()
    const [data, setData] = useState(initialState)

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        axios.get(url, {
            headers: {
                auth: token
            }}).then((response) => {
            setData(response.data[lastData])
        })
    .catch(err => {
        console.log(err)
    })
    }, [url, history, lastData])
    return data
}
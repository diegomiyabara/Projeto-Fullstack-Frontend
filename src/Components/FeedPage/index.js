import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header'

const FeedPage = () => {
    const [feed, setFeed] = useState()
    const token = window.localStorage.getItem('token')
    const history = useHistory()

    useEffect(() => {
        if(!token) {
            history.push("/login")
        } else {
            Axios.get('/')
        }
    }, [])
    return(
        <div>
            <Header />
        </div>
    )
}

export default FeedPage
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ButtonBar from '../ButtonBar'
import Header from '../Header'
import {StyledPaper, Img} from './styles'

const FriendListPage = () => {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    const [friends, setFriends] = useState()

    useEffect(() => {
        if(!token) {
            history.push('/login')
        } else {
            Axios.get(`https://pic-memories.herokuapp.com/user/friends`, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setFriends(response.data.Friends)
            })
        }
    }, [token, history])

    console.log(friends)
    return (
        <div>
            <Header/>
            <ButtonBar />
            <div>
                <h2>Amigos</h2>
                {friends && friends.map((friend) => {
                    return (
                        <StyledPaper key={friend.id}>
                            <Img src={friend.photoUrl}></Img>
                            <p>{friend.name}</p>
                        </StyledPaper>
                    )
                })}
            </div>
        </div>
    )
}

export default FriendListPage
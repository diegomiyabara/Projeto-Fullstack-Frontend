import {StyledPaper, Button, NameContainer, Img} from './styles'
import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header'
import ButtonBar from '../ButtonBar'

const UserListPage = () => {
    const [users, setUsers] = useState()
    const [friends, setFriends] = useState()
    const token = window.localStorage.getItem('token')
    const history = useHistory()

    useEffect(() => {
        if(!token) {
            history.push('/login')
        } else {
            Axios.get('https://pic-memories.herokuapp.com/user/', {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setUsers(response.data.Users)
            })
            Axios.get('https://pic-memories.herokuapp.com/user/friends', {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setFriends(response.data.Friends)
            })
        }
    }, [token, history])

    const followFriend = (friend_id) => {
        const body = {
            user_to_follow_id: friend_id
        }
        Axios.post('https://pic-memories.herokuapp.com/user/follow', body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            window.location.reload()
        })
    }

    const unFollowFriend = (friend_id) => {
        const body = {
            user_to_unfollow_id: friend_id
        }
        Axios.post('https://pic-memories.herokuapp.com/user/unfollow', body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            window.location.reload()
        })
    }

    const renderButton = (userId) => {
        let checkFriend = false
        friends && friends.find((friend) => {
            if(friend.friend_id === userId) {
                return checkFriend = true
            } else {
                return checkFriend = false
            }
        })
        if(checkFriend === true){
            return <Button onClick={() => unFollowFriend(userId)}>Seguindo</Button>
        } else {
            return <Button onClick={() => followFriend(userId)}>Seguir</Button>
        }
    }

    return(
        <div>
            <Header />
            <ButtonBar />
            <div>
                <h2>Usuários</h2>
                {users && users.map((user) => {
                    return (
                        <StyledPaper key={user.id}>
                            <NameContainer>
                                <Img src={user.photoUrl} height="35px"></Img>
                                <p>Nome: {user.name}</p>
                            </NameContainer>
                            {renderButton(user.id)}
                        </StyledPaper>
                    )
                })}
            </div>
        </div>
    )
}

export default UserListPage
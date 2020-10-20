import {StyledPaper} from './styles'
import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header'

const UserListPage = () => {
    const [users, setUsers] = useState()
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
        }
    }, [token, history])

    console.log(users)
    return(
        <div>
            <Header />
            <div>
                <h2>Usuários</h2>
                {users && users.map((user) => {
                    return (
                        <StyledPaper>
                            <div>Nome: {user.name}</div>
                            <button>Seguir</button>
                        </StyledPaper>
                    )
                })}
            </div>
        </div>
    )
}

export default UserListPage
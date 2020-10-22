import React from 'react'
import { useHistory } from 'react-router-dom'
import {MenuContainer, Button} from './styles'

const ButtonBar = () => {
    const history = useHistory()

    const goToFeedPage = () => {
        history.push(`/feed`)
    }

    const goToUsersPage = () => {
        history.push(`/users`)
    }

    const goToFriendsPage = () => {
        history.push(`/friends`)
    }
    return (
        <MenuContainer>
            <Button onClick={goToFeedPage}>Feed</Button>
            <Button onClick={goToUsersPage}>Usuários</Button>
            <Button onClick={goToFriendsPage}>Amigos</Button>
        </MenuContainer>
    )
}

export default ButtonBar
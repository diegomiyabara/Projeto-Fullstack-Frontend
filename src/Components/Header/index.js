import React from 'react'
import {MainContainer, LogoImg, ButtonContainer, Button} from './styles'
import logo from '../../Images/logo.png'
import { useHistory } from 'react-router-dom'

function Header() {
    const history = useHistory()
    const goToLoginPage = () => {
        history.push("/login")
    }
    const renderButton = () => {
        const token = window.localStorage.getItem("token")
        if(!token) {
            return (
                <ButtonContainer>
                    <Button onClick={goToLoginPage}>Login</Button>
                </ButtonContainer>
            )
        } else {
            return(
                <ButtonContainer>
                    <button>Logout</button>
                </ButtonContainer>
            )
        }
    }
    return(
        <MainContainer>
            <LogoImg src={logo}/>
            <h2>Pic Memories</h2>
            {renderButton()}
        </MainContainer>
    )
}

export default Header
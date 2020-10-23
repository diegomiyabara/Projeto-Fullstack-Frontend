import React from 'react'
import {MainContainer, LogoImg, ButtonContainer, Button} from './styles'
import logo from '../../Images/logo.png'
import { useHistory } from 'react-router-dom'

function Header() {
    const history = useHistory()
    const goToLoginPage = () => {
        history.push("/login")
    }
    const goToSignUpPage = () => {
        history.push("/signup")
    }
    const goToAlbunsPage = () => {
        history.push("/albuns")
    }
    const goToHomePage = () => {
        history.push('/')
    }
    const handleLogout = () => {
        window.localStorage.clear()
        history.push("/")
        window.location.reload()
    }
    const renderButton = () => {
        const token = window.localStorage.getItem("token")
        if(!token) {
            return (
                <ButtonContainer>
                    <Button onClick={goToLoginPage}>Login</Button>
                    <Button onClick={goToSignUpPage}>Cadastre-se</Button>
                </ButtonContainer>
            )
        } else {
            return(
                <ButtonContainer>
                    <Button onClick={goToAlbunsPage}>Meus Álbuns</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                </ButtonContainer>
            )
        }
    }
    return(
        <MainContainer>
            <LogoImg src={logo} onClick={goToHomePage}/>
            <h2>Pic Memories</h2>
            {renderButton()}
        </MainContainer>
    )
}

export default Header
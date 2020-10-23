import React from 'react'
import Header from '../Header'
import logo from '../../Images/logo.png'
import {MainContainer, BodyContainer, PhrasesContainer, ImageContainer, Button} from './styles'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
    const history = useHistory()

    const goToSignUpPage = () => {
        history.push('/signup')
    }

    const token = window.localStorage.getItem('token')

    useEffect(() => {
        if(token) {
            history.push('/feed')
        }
    })

    return(
        <MainContainer>
            <Header/>
            <BodyContainer>
                <PhrasesContainer>
                    <p>Bem vindos ao Pic Manager</p>
                    <p>Uma rede social que te permite organizar seus ábuns de fotos</p>
                    <p>Além disso tudo, você poderá ver os álbuns dos amigos que você está seguindo!</p>
                    <p>Faça seu cadastro agora!</p>
                </PhrasesContainer>
                <ImageContainer>
                    <img src={logo} width="300px"/>
                </ImageContainer>
            </BodyContainer>
            <Button onClick={goToSignUpPage}>Cadastre-se</Button>
        </MainContainer>
    )
}

export default Home
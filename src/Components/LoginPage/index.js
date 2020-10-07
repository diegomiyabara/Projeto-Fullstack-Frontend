import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import {MainContainer, LoginContainer, Img, LoginBox, ContainerInputs, Title, Button} from './styles'
import Header from '../Header'
import {TextField} from '@material-ui/core'
import useForm from '../../Hooks/useForm'
import logo from '../../Images/logo.png'

function LoginPage() {
    const history = useHistory();
    const baseUrl = "https://pic-memories.herokuapp.com/user"
    const {form, onChange} = useForm({emailOrNickname:"", password: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token !== null){
            history.push("/albuns-list")
        }
    },[history])

    const handleLogin = (event) => {
        event.preventDefault()
        const body = {
            emailOrNickname: form.emailOrNickname,
            password: form.password
        }
        axios.post(`${baseUrl}/login`, body)
        .then(response => {
            window.localStorage.setItem("token", response.data.token)
            alert("Login feito com sucesso!")
            history.push("/albuns-list")
        })
        .catch(err => {
            alert("Usuário/email ou senha inválidos!")
        })  
    }
    return(
        <MainContainer>
            <Header/>
            <LoginContainer>
                <Img src={logo} width="220px"/>
                <LoginBox>
                    <Title>Inicie sua sessão</Title>
                    <form onSubmit={handleLogin}>
                        <ContainerInputs>
                            <TextField 
                                label="Login" 
                                variant="outlined"
                                type="text"
                                name="emailOrNickname"
                                placeholder="Digite seu usuário ou E-mail"
                                value={form.emailOrNickname}
                                required
                                onChange={handleInputChange}
                            />
                            <br></br>
                            <TextField  
                                label="Senha" 
                                variant="outlined"                      
                                type="password" 
                                name="password"
                                placeholder="Digite sua senha"
                                value={form.password} 
                                required
                                onChange={handleInputChange}
                            />
                        </ContainerInputs>
                        <br></br>
                        <Button>Fazer Login</Button>
                    </form>
                </LoginBox>
            </LoginContainer>
        </MainContainer>
    )
}

export default LoginPage
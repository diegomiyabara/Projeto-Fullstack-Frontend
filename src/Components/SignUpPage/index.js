import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import {MainContainer, SignUpContainer, Img, SignUpBox, ContainerInputs, Title, Button} from './styles'
import Header from '../Header'
import {TextField} from '@material-ui/core'
import useForm from '../../Hooks/useForm'
import logo from '../../Images/logo.png'

function SignUpPage() {
    const history = useHistory();
    const baseUrl = "https://pic-memories.herokuapp.com/user"
    const {form, onChange} = useForm({name:"", email: "", nickname: "", password: ""})
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

    const handleSignUp = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            email: form.email,
            nickname: form.nickname,
            password: form.password
        }
        axios.post(`${baseUrl}/signup`, body)
        .then(response => {
            window.localStorage.setItem("token", response.data.token)
            alert("Usuário cadastrado com sucesso!")
            history.push("/albuns")
        })
        .catch(err => {
            alert(err.message)
        })  
    }
    return(
        <MainContainer>
            <Header/>
            <SignUpContainer>
                <Img src={logo} width="220px"/>
                <SignUpBox>
                    <Title>Cadastre-se</Title>
                    <form onSubmit={handleSignUp}>
                        <ContainerInputs>
                            <TextField 
                                label="Nome Completo" 
                                variant="outlined"
                                type="text"
                                name="name"
                                placeholder="Digite seu nome completo"
                                inputProps={{pattern: "^.{3,}", title:"Seu nome precisa ter no mínimo 3 caracteres"}}
                                value={form.name}
                                required
                                onChange={handleInputChange}
                            />
                            <TextField  
                                label="E-mail" 
                                variant="outlined"                      
                                type="email" 
                                name="email"
                                placeholder="Digite seu e-mail."
                                value={form.email} 
                                required
                                onChange={handleInputChange}
                            />
                            <TextField  
                                label="Nome de usuário" 
                                variant="outlined"                      
                                type="text" 
                                name="nickname"
                                placeholder="Digite seu nome de usuário"
                                inputProps={{pattern: "^.{3,}", title:"Seu nome de usuário precisa ter no mínimo 3 caracteres"}}
                                value={form.nickname} 
                                required
                                onChange={handleInputChange}
                            />
                            <TextField  
                                label="Senha" 
                                variant="outlined"                      
                                type="password" 
                                name="password"
                                placeholder="Digite sua senha"
                                inputProps={{pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", title:"Sua senha precisa conter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número."}}
                                value={form.password} 
                                required
                                onChange={handleInputChange}
                            />
                        </ContainerInputs>
                        <br></br>
                        <Button>Cadastrar</Button>
                    </form>
                </SignUpBox>
            </SignUpContainer>
        </MainContainer>
    )
}

export default SignUpPage
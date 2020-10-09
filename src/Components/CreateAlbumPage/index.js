import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import {MainContainer, SignUpContainer, Img, SignUpBox, ContainerInputs, Title, Button, LoadingContainer, Yellow, Red, Blue, Violet} from './styles'
import Header from '../Header'
import {TextField} from '@material-ui/core'
import useForm from '../../Hooks/useForm'
import logo from '../../Images/logo.png'

const CreateAlbumPage = () => {
    const history = useHistory();
    const [render, setRender] = useState(false)
    const baseUrl = "https://pic-memories.herokuapp.com/album"
    const token = window.localStorage.getItem('token')
    const {form, onChange} = useForm({name:"", description: "", albumImageUrl: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(!token){
            history.push("/login")
        }
    },[history])

    const renderButton = () => {
        if(!render) {
            return (
                <Button>Criar Álbum</Button>
            )
        } else {
            return(
                <LoadingContainer><Yellow></Yellow><Red></Red><Blue></Blue><Violet></Violet></LoadingContainer>
            )
        }
    }

    const handleSignUp = (event) => {
        event.preventDefault()
        setRender(true)
        const body = {
            name: form.name,
            description: form.description,
            albumImageUrl: form.albumImageUrl,
        }
        axios.post(`${baseUrl}/`,body, {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            alert("Álbum cadastrado com sucesso!")
            history.push("/albuns")
        })
        .catch(err => {
            alert(err.message)
            setRender(false)
        })  
    }
    return(
        <MainContainer>
            <Header/>
            <SignUpContainer>
                <Img src={logo} width="220px"/>
                <SignUpBox>
                    <Title>Novo Álbum</Title>
                    <form onSubmit={handleSignUp}>
                        <ContainerInputs>
                            <TextField 
                                label="Nome do Álbum" 
                                variant="outlined"
                                type="text"
                                name="name"
                                placeholder="Digite o nome do novo álbum"
                                inputProps={{pattern: "^.{3,}", title:"O nome do álbum precisa ter no mínimo 3 caracteres"}}
                                value={form.name}
                                required
                                onChange={handleInputChange}
                            />
                            <TextField  
                                label="Descrição" 
                                variant="outlined"                      
                                type="text" 
                                name="description"
                                placeholder="Digite a descrição do álbum."
                                inputProps={{pattern: "^.{5,}", title:"A descrição precisa ter no mínimo 5 caracteres"}}
                                value={form.description} 
                                required
                                onChange={handleInputChange}
                            />
                            <TextField  
                                label="Insira a url da imagem do álbum" 
                                variant="outlined"                      
                                type="text" 
                                name="albumImageUrl"
                                placeholder="Digite seu nome de usuário"
                                value={form.albumImageUrl} 
                                onChange={handleInputChange}
                            />
                        </ContainerInputs>
                        <br></br>
                        {renderButton()}
                    </form>
                </SignUpBox>
            </SignUpContainer>
        </MainContainer>
    )
}

export default CreateAlbumPage
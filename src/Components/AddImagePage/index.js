import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios'
import {MainContainer, AddImageContainer, Img, AddImageBox, ContainerInputs, Title, Button, LoadingContainer, Yellow, Red, Blue, Violet} from './styles'
import Header from '../Header'
import {TextField} from '@material-ui/core'
import useForm from '../../Hooks/useForm'
import logo from '../../Images/logo.png'

const AddImagePage = () => {
    const history = useHistory();
    const params = useParams();
    const [render, setRender] = useState(false)
    const baseUrl = "https://pic-memories.herokuapp.com/image"
    const token = window.localStorage.getItem('token')
    const {form, onChange} = useForm({ description: "", photoUrl: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    
    useEffect(() => {
        if(!token){
            history.push("/login")
        }
    },[token, history])

    const renderButton = () => {
        if(!render) {
            return (
                <Button>Adicionar foto</Button>
            )
        } else {
            return(
                <LoadingContainer><Yellow></Yellow><Red></Red><Blue></Blue><Violet></Violet></LoadingContainer>
            )
        }
    }

    const handleAddImage = (event) => {
        event.preventDefault()
        setRender(true)
        const body = {
            description: form.description,
            photoUrl: form.photoUrl,
            album_id: params.albumId
        }
        axios.post(`${baseUrl}/`,body, {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            alert(`Foto adicionada ao álbum com sucesso!`)
            history.push(`/album/${params.albumId}`)
        })
        .catch(err => {
            alert(err.message)
            setRender(false)
        })  
    }
    return(
        <MainContainer>
            <Header/>
            <AddImageContainer>
                <Img src={logo} width="220px"/>
                <AddImageBox>
                    <Title>Adicionar Foto</Title>
                    <form onSubmit={handleAddImage}>
                        <ContainerInputs>
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
                                label="Insira a url da foto" 
                                variant="outlined"                      
                                type="text" 
                                name="photoUrl"
                                placeholder="Insira a URL da foto."
                                value={form.photoUrl} 
                                onChange={handleInputChange}
                                required
                            />
                        </ContainerInputs>
                        <br></br>
                        {renderButton()}
                    </form>
                </AddImageBox>
            </AddImageContainer>
        </MainContainer>
    )
}

export default AddImagePage
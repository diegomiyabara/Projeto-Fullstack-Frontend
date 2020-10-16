import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import Header from '../Header/index'
import { useHistory, useParams } from 'react-router-dom'
import {MainContainer, AlbumContainer, StyledPaper, ButtonContainer, Button, LoadingContainer, Yellow, Red, Blue, Violet, NoAlbumContainer, ImageTitle} from './styles'

const AlbumDetailPage = () => {
    const history = useHistory();
    const params = useParams();
    const [images, setImages] = useState();
    const [album, setAlbum] = useState();
    const baseUrl = "https://pic-memories.herokuapp.com/image/?albumId="
    const token = window.localStorage.getItem("token")

    useEffect(() => {
        if(token === null){
            history.push("/login")
        } else {
            Axios.get(`${baseUrl}${params.albumId}`, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setImages(response.data.Images)
            })
            .catch(err => {
                alert("Sua sessão expirou, realize o login novamente.")
                window.localStorage.clear()
                history.push("/login")
            })
            Axios.get(`https://pic-memories.herokuapp.com/album/${params.albumId}`, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setAlbum(response.data.Album)
            })
        }
    }, [token, history, params, baseUrl])

    const goToAddImagePage = (albumId) => {
        history.push(`/album/${albumId}/image`)
    }

    const goToImagePage = (imageId) => {
        history.push(`/image/${imageId}`)
    }

    return (
        <MainContainer>
            <Header/>
            <h2>{album && album.name}</h2>
            <ButtonContainer><Button onClick={() => goToAddImagePage(album.id)}>Adicionar Foto</Button></ButtonContainer>
            <AlbumContainer>
                {!images ? <LoadingContainer><Yellow></Yellow><Red></Red><Blue></Blue><Violet></Violet></LoadingContainer> : images.length === 0 ? <NoAlbumContainer>Você não possui nenhuma foto neste álbum!</NoAlbumContainer> : images.map((image) => {
                    return(
                        <StyledPaper elevation={3} key={image.id}>
                            <img src={image.photoUrl} alt="Album" width="400px" cursor="pointer" onClick={() => goToImagePage(image.id)}/>
                            <ImageTitle>{image.description}</ImageTitle>
                        </StyledPaper>
                    )
                })}
            </AlbumContainer>
        </MainContainer>
    )
}

export default AlbumDetailPage
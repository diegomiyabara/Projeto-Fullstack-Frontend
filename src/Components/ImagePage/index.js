import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Header from '../Header';
import {MainContainer, ImageContainer, Button, LoadingContainer, Yellow, Red, Blue, Violet} from './styles'

const ImagePage = () => {
    const params = useParams();
    const history = useHistory();
    const [image, setImage] = useState();
    const token = window.localStorage.getItem("token")
    const baseUrl = "https://pic-memories.herokuapp.com/image"

    useEffect(() => {
        if(token === null){
            history.push("/login")
        } else {
            Axios.get(`${baseUrl}/${params.imageId}`, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setImage(response.data)
            })
            .catch(err => {
                alert("Sua sessão expirou, realize o login novamente.")
                window.localStorage.clear()
                history.push("/login")
            })
    }}, [baseUrl, params, token, history])

    const goToAlbumDetailPage = () => {
        history.push(`/album/${image.album_id}`)
    }

    return (
        <MainContainer>
            <Header />
            {image && <Button onClick={goToAlbumDetailPage}>voltar</Button>}
            {!image ? <LoadingContainer><Yellow></Yellow><Red></Red><Blue></Blue><Violet></Violet></LoadingContainer>: <ImageContainer><img src={image && image.photoUrl} alt=""/></ImageContainer>}
        </MainContainer>
    )
}

export default ImagePage
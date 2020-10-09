import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {MainContainer, AlbumContainer, StyledPaper, ButtonContainer, Button, LoadingContainer, Yellow, Red, Blue, Violet, NoAlbumContainer} from './styles'
import Header from '../Header'
import notFoundImage from '../../Images/not-found.png'

const AlbunsPage = () => {
    const history = useHistory();
    const [albuns, setAlbuns] = useState()
    const token = window.localStorage.getItem('token')
    const baseUrl = "https://pic-memories.herokuapp.com/album"

    useEffect(() => {
        if(token === null){
            history.push("/login")
        } else {
            Axios.get(`${baseUrl}/`, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setAlbuns(response.data.Albuns)
            })
            .catch((err) => {
                alert("Sessão expirada, realize um novo login!")
                window.localStorage.clear()
                history.push("/login")
            })
        }
    }, [history, token])

    const goToCreateAlbumPage = () => {
        history.push("/albuns/new")
    }

    const goToAlbumDetailPage = (albumId) => {
        history.push(`/album/${albumId}`)
    }

    return(
        <MainContainer>
            <Header/>
            <h2>Álbuns</h2>
            <ButtonContainer><Button onClick={goToCreateAlbumPage}>Novo Álbum</Button></ButtonContainer>
            <AlbumContainer>
                {!albuns ? <LoadingContainer><Yellow></Yellow><Red></Red><Blue></Blue><Violet></Violet></LoadingContainer> : albuns.length === 0 ? <NoAlbumContainer>Você não possui nenhum álbum!</NoAlbumContainer> : albuns.map((album) => {
                    return(
                        <StyledPaper elevation={3} key={album.id} onClick={() => goToAlbumDetailPage(album.id)}>
                            <h4>{album.name}</h4>
                            {album.albumImageUrl === "" ? <img src={notFoundImage} width="400px" alt="Not found"/> : <img src={album.albumImageUrl} alt="Album" width="400px" />}
                            <p>{album.description}</p>
                        </StyledPaper>
                    )
                })}
            </AlbumContainer>
        </MainContainer>
    )
}

export default AlbunsPage
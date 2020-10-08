import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {MainContainer, AlbumContainer, StyledPaper, ButtonContainer, Button} from './styles'
import Header from '../Header'
import notFoundImage from '../../Images/not-found.png'

const AlbunsPage = () => {
    const history = useHistory();
    const [albuns, setAlbuns] = useState([])
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
                alert("Autorização expirada, realize um novo login!")
                window.localStorage.clear()
                history.push("/login")
            })
        }
    }, [history, token])

    console.log(albuns)

    return(
        <MainContainer>
            <Header/>
            <h2>Álbuns</h2>
            <ButtonContainer><Button>Novo Álbum</Button></ButtonContainer>
            <AlbumContainer>
                {albuns.map((album) => {
                    return(
                        <StyledPaper elevation={3} key={album.id}>
                            <p>{album.name}</p>
                            {album.albumImageUrl === "" ? <img src={notFoundImage} width="400px" alt="Not found"/> : <img src={album.albumImageUrl} alt="Album"/>}
                            <p>{album.description}</p>
                        </StyledPaper>
                    )
                })}
            </AlbumContainer>
        </MainContainer>
    )
}

export default AlbunsPage
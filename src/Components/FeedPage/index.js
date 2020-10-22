import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {AlbumContainer, LoadingContainer, Red, Yellow, Blue, Violet, NoAlbumContainer, StyledPaper, TitleContainer, UserContainer, Title, Img} from './styles'
import Header from '../Header'
import ButtonBar from '../ButtonBar'
import notFoundImage from '../../Images/not-found.png'

const FeedPage = () => {
    const [feed, setFeed] = useState()
    const token = window.localStorage.getItem('token')
    const history = useHistory()

    useEffect(() => {
        if(!token) {
            history.push("/login")
        } else {
            Axios.get('https://pic-memories.herokuapp.com/user/feed', {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setFeed(response.data.Feed)
            })
            .catch((err) => {
                console.log(err.message)
            })
        }
    }, [token, history])

    const goToAlbumDetailPage = (albumId) => {
        history.push(`/album/${albumId}`)
    }

    console.log(feed)
    return(
        <div>
            <Header />
            <ButtonBar />
            <h2>Feed</h2>
                <AlbumContainer>
                    {!feed ? <LoadingContainer><Yellow></Yellow><Red></Red><Blue></Blue><Violet></Violet></LoadingContainer> : feed.length === 0 ? <NoAlbumContainer>Você não possui nenhum álbum!</NoAlbumContainer> : feed.map((post) => {
                    return(
                        <StyledPaper elevation={3} key={post.album_id} onClick={() => goToAlbumDetailPage(post.album_id)}>
                            <TitleContainer>
                                <UserContainer>
                                    <Img height="25px" src={post.user_photo} />
                                    <p>{post.name}</p>
                                </UserContainer>
                                <Title>{post.album_name}</Title>
                                <div></div>
                            </TitleContainer>                            
                            {post.album_imageUrl === "" ? <img src={notFoundImage} width="400px" height="300px" alt="Not found"/> : <img src={post.album_imageUrl} alt="Album" width="400px" height="300px"/>}
                            <p>{post.album_description}</p>
                        </StyledPaper>
                    )
                    })}
                </AlbumContainer>
        </div>
    )
}

export default FeedPage
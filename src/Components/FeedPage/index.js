import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {AlbumContainer, LoadingContainer, Red, Yellow, Blue, Violet, NoAlbumContainer, StyledPaper, TitleContainer, UserContainer, Title, Img, FilterContainer, Button} from './styles'
import { FormControl, InputLabel, Select, TextField } from '@material-ui/core'
import Header from '../Header'
import ButtonBar from '../ButtonBar'
import useForm from '../../Hooks/useForm'
import notFoundImage from '../../Images/not-found.png'

const FeedPage = () => {
    const [feed, setFeed] = useState()
    const token = window.localStorage.getItem('token')
    const history = useHistory()
    const {form, onChange, resetForm} = useForm({nameHash:"", dateFilter: "DESC"})
    
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }

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

    const handleFilter = (e) => {
        e.preventDefault()
        console.log("filtrando")
        const config = {
            headers: {
                Authorization: token
            }
        }
        Axios.get(`https://pic-memories.herokuapp.com/user/feed?name=${form.nameHash}&orderBy=${form.dateFilter}`, config)
        .then((res) => {
            setFeed(res.data.Feed)
            resetForm()
        })
    }

    return(
        <div>
            <Header />
            <ButtonBar />
            <h2>Feed</h2>
            <form onSubmit={handleFilter}>
                <FilterContainer>
                    <TextField 
                    label="Nome do usuário" 
                    variant="outlined"
                    type="text"
                    name="nameHash"
                    placeholder="Busque por usuário"
                    value={form.albumHash}
                    onChange={handleInputChange}
                    />
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="dateFilter">Ordernar por data</InputLabel>
                    <Select 
                        native
                        id="dateFilter" 
                        label="Ordenar por data"
                        value={form.dateFilter}
                        onChange={handleInputChange}
                        inputProps={{
                            name: 'dateFilter',
                            id:'dateFilter'
                        }}
                    >
                        <option value="DESC">Mais recentes</option>
                        <option value="ASC">Mais antigas</option>
                    </Select>
                    </FormControl>
                    <Button>Filtrar</Button>
                </FilterContainer>
            </form>
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
                            {post.album_imageUrl === "" ? <img src={notFoundImage} width="400px" height="300px" alt=""/> : <img src={post.album_imageUrl} alt="Album" width="400px" height="300px"/>}
                            <p>{post.album_description}</p>
                        </StyledPaper>
                    )
                })}
            </AlbumContainer>
        </div>
    )
}

export default FeedPage
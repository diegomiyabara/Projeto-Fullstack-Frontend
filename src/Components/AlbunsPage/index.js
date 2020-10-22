import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {MainContainer, AlbumContainer, StyledPaper, ButtonContainer, Button, LoadingContainer, Yellow, Red, Blue, Violet, NoAlbumContainer, FilterContainer} from './styles'
import Header from '../Header'
import { FormControl, InputLabel, Select, TextField } from '@material-ui/core'
import notFoundImage from '../../Images/not-found.png'
import useForm from '../../Hooks/useForm'
import ButtonBar from '../ButtonBar';

const AlbunsPage = () => {
    const {form, onChange, resetForm} = useForm({albumHash:"", dateFilter: "DESC"})
    const history = useHistory();
    const [albuns, setAlbuns] = useState()
    const token = window.localStorage.getItem('token')
    const baseUrl = "https://pic-memories.herokuapp.com/album"
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }

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

    const handleFilter = (e) => {
        e.preventDefault()
        const config = {
            headers: {
                Authorization: token
            }
        }
        Axios.get(`${baseUrl}/?hashtag=${form.albumHash}&orderDate=${form.dateFilter}`, config)
        .then((res) => {
            setAlbuns(res.data.Albuns)
            resetForm()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <MainContainer>
            <Header/>
            <ButtonBar />
            <h2>Álbuns</h2>
            <ButtonContainer><Button onClick={goToCreateAlbumPage}>Novo Álbum</Button></ButtonContainer>
            <form onSubmit={handleFilter}>
                <FilterContainer>
                    <TextField 
                    label="Nome do álbum" 
                    variant="outlined"
                    type="text"
                    name="albumHash"
                    placeholder="Busque pelo nome do álbum"
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
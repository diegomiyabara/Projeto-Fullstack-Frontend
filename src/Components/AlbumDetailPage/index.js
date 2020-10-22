import Axios from 'axios';
import React, {useEffect, useState} from 'react'
import Header from '../Header/index'
import { useHistory, useParams } from 'react-router-dom'
import { FormControl, InputLabel, Select, TextField } from '@material-ui/core'
import {MainContainer, AlbumContainer, StyledPaper, ButtonContainer, Button, LoadingContainer, Yellow, Red, Blue, Violet, NoAlbumContainer, ImageTitle, FilterContainer} from './styles'
import useForm from '../../Hooks/useForm'

const AlbumDetailPage = () => {
    const {form, onChange, resetForm} = useForm({albumHash:"", dateFilter: "DESC"})
    const history = useHistory();
    const params = useParams();
    const [images, setImages] = useState();
    const [album, setAlbum] = useState();
    const baseUrl = "https://pic-memories.herokuapp.com/image/?albumId="
    const token = window.localStorage.getItem("token")

    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }

    useEffect(() => {

        if(token === null){
            history.push("/login")
        } else {
            const config = {
                headers: {
                    Authorization: token
                }
            }
            Axios.get(`${baseUrl}${params.albumId}`, config)
            .then((res) => {
                setImages(res.data.Images)
            })
            .catch((err) => {
                console.log(err.message)
            })

        }
    }, [token, history, params, baseUrl])

    useEffect(() => {
        Axios.get(`https://pic-memories.herokuapp.com/album/${params.albumId}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            setAlbum(response.data.Album)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [history, token, params, baseUrl])

    const goToAddImagePage = (albumId) => {
        history.push(`/album/${albumId}/image`)
    }

    const goToImagePage = (imageId) => {
        history.push(`/image/${imageId}`)
    }

    const handleFilter = (e) => {
        e.preventDefault()
        const config = {
            headers: {
                Authorization: token
            }
        }
        Axios.get(`${baseUrl}${params.albumId}&hashtag=${form.albumHash}&orderDate=${form.dateFilter}`, config)
        .then((res) => {
            setImages(res.data.Images)
            resetForm()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <MainContainer>
            <Header/>
            <h2>{album && album.name}</h2>
            <ButtonContainer><Button onClick={() => goToAddImagePage(album.id)}>Adicionar Foto</Button></ButtonContainer>
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
                {!images ? <LoadingContainer><Yellow></Yellow><Red></Red><Blue></Blue><Violet></Violet></LoadingContainer> : images.length === 0 ? <NoAlbumContainer>Nenhuma foto encontrada!</NoAlbumContainer> : images.map((image) => {
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
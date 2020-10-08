import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #E9EAEA;
    font-family: 'Roboto';
`

export const AlbumContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 15px;
    flex-wrap: wrap;
`

export const StyledPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    margin: 20px;
    width: 440px;
    height: 450px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Button = styled.button`
    height: 40px;
    width: 180px;
    background-color: #323232;
    color: #F9F9F9;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    :hover {
        color: #F9F9F9;
        opacity: 90%;
    }
`
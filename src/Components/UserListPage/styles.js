import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const StyledPaper = styled(Paper)`
    margin: 10px auto;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    width: 50vw;
    height: 50px;
    align-items: center;
`

export const Button = styled.button`
    height: 30px;
    width: 110px;
    margin: 0 5px;
    align-self: center;
    background-color: #323232;
    color: #F9F9F9;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 0.8em;
    :hover {
        color: #F9F9F9;
        opacity: 90%;
    }
`

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Img = styled.img`
    border-radius: 100%;
    margin-right: 15px;
`
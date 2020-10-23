import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const BodyContainer = styled.div`
    display: flex;
    height: 40vh;
    margin-top: 15vh;
    justify-content: space-evenly;
`

export const PhrasesContainer = styled.div`
    background-color: #808080;
    color: #FFF;
    border-radius: 20px;
    padding: 10px 20px;
    height: 55%;
`

export const ImageContainer = styled.div`

`

export const Button = styled.button`
    height: 60px;
    width: 180px;
    margin: 0 5px;
    align-self: center;
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
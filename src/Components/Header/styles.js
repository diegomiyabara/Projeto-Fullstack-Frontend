import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #323232;
    color: #FFF;
    padding: 10px;
    font-family: 'Roboto';
`

export const LogoImg = styled.img`
    width: 130px;
    padding-left: 10px;
    margin-right: 110px;
    cursor: pointer;
`

export const ButtonContainer = styled.div`
    width: 260px;
    padding-right: 10px;
`

export const Button = styled.button`
    height: 40px;
    width: 130px;
    border-radius: 10px;
    background-color: #323232;
    color: #FFF;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    :hover {
        background-color: #FFF;
        color: #323232;
    }
`
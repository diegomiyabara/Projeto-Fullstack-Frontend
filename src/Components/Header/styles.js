import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #323232;
    color: #FFF;
    padding: 10px;
`

export const LogoImg = styled.img`
    width: 100px;
    padding-left: 10px;
`

export const ButtonContainer = styled.div`
    width: 100px;
    padding-right: 10px;
`

export const Button = styled.button`
    background-color: #323232;
    color: #FFF;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    :hover {
        background-color: #FFF;
        color: #323232;
        border-radius: 10px;
        height: 40px;
        width: 80px;
    }
`
import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 20px;
    width: 45vw;
`

export const Button = styled.button`
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
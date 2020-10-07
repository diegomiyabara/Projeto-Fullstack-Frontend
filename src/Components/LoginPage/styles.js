import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #E9EAEA;
    height: 100vh;
`

export const LoginContainer = styled.div`
    display: flex;
    height: 70vh;
    flex-direction: column;
    justify-content: center;
`

export const Img = styled.img`
    margin: 0 auto;
`

export const LoginBox = styled.div`
    width: 400px;
    height: 300px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 2px solid white;
    border-radius: 20px;
    background-color: #F9F9F9;
    opacity: 80%;
`

export const ContainerInputs = styled.div`
    height: 130px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.p`
    margin:0;
    padding: 0;
    color: #323232;
    font-family: 'Roboto';
    font-size: 1.2rem;
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
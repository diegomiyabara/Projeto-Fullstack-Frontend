import styled from 'styled-components'
import {Paper} from '@material-ui/core'

export const StyledPaper = styled(Paper)`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 0 10px;
margin: 20px;
width: 440px;
height: 450px;
cursor: pointer;
`

export const AlbumContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 15px;
    flex-wrap: wrap;
`

export const LoadingContainer = styled.div`
    margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;

    @keyframes bounce {
	0%, 50%, 100% {
		transform: scale(1);
		filter: blur(0px);
	}
	25% {
		transform: scale(0.6);
		filter: blur(3px);
	}
	75% {
		filter: blur(3px);
		transform: scale(1.4);
	}
}
`

export const Yellow = styled.div`
    width: 3vw;
	height: 3vw;
	border-radius: 100%;
	margin: 2vw;
	background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
    animation: bounce 1.5s 0.5s linear infinite;
    background-color: #feb60a;
`

export const Red = styled.div`
    width: 3vw;
	height: 3vw;
	border-radius: 100%;
	margin: 2vw;
	background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
    animation: bounce 1.5s 0.5s linear infinite;
    background-color: #ff0062;
    animation-delay: 0.1s;
`

export const Blue = styled.div`
    width: 3vw;
	height: 3vw;
	border-radius: 100%;
	margin: 2vw;
	background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
    animation: bounce 1.5s 0.5s linear infinite;
    background-color: #00dbf9;
    animation-delay: 0.2s;
`

export const Violet = styled.div`
    width: 3vw;
	height: 3vw;
	border-radius: 100%;
	margin: 2vw;
	background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
    animation: bounce 1.5s 0.5s linear infinite;
    background-color: #da00f7;
    animation-delay: 0.3s;
`

export const NoAlbumContainer = styled.div`
    padding-top: 30px;
    font-family: 'Roboto';
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-left: 20px;
`

export const Title = styled.h4`
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
`

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-right: 10px;
`

export const Img = styled.img`
    border-radius: 100%;
    margin-right: 10px;
`

export const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 30px;
    width: 45vw;
`

export const Button = styled.button`
height: 40px;
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
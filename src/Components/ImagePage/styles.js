import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export const Button = styled.button`
    margin: 0px auto;
    margin-top: 30px;
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
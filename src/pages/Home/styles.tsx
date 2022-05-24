import styled from 'styled-components';
import homeBanner from '../../assets/images/home.jpg';

export const Container = styled.div`
    background-image: url(${homeBanner});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    place-items: center;
    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        content: "";
        background: #000000;
        background: linear-gradient(0deg,rgba(0,0,0,.9) 0,rgba(0,0,0,.7) 37%,rgba(0,0,0,0) 100%);
        transition: all .3s ease-in-out;
        opacity: 1;
    }
`;

export const Title = styled.h1`
    color: black;
    font-weight: bold;
    font-size: 3.5em;
`
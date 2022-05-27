import styled from "styled-components";
import homeBanner from "../../assets/images/home.png";
import MarvelImg from "../../assets/images/marvel-logo.png";

export const Wrapper = styled.div`
    background-image: url(${homeBanner});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10%;
`;

export const MarvelLogo = styled.img.attrs({
    src: MarvelImg
})`
    position: absolute;
    top: 10%;
    width: 150px;
`;

export const Title = styled.h1`
    color: white;
    font-weight: bold;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    width: min(700px, 100%);
    text-shadow: 0px 5px 10px ${props => props.theme.colors.dark};
    user-select: none;
`;
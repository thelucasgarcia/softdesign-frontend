import styled from "styled-components";
import notfoundbackground from "../../assets/images/notfound.jpg";

export const Container = styled.div`
    display: flex;
    place-items: center;
    height: 100vh;
    background-image: url(${notfoundbackground});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 85% center;
    background-color: #fff;

    @media screen and (max-width: 768px) {
        background-size: cover;
        background-position: center;
    }

    div {
        padding: 0 50px;
        background: rgb(255 255 255 / 80%);
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1, h2, p {
        color: ${props => props.theme.colors.dark};
        margin: 0;
        text-shadow: 0px 0px 15px white;
        word-break: break-word;
        width: fit-content;
    }

    h1 {
        font-size: clamp(2.5rem, 5vw, 3.5rem);
    }

    h2 {
        font-size: clamp(1rem, 1vw, 2rem);
    }

    a {
        display: flex;
        place-items: center;
        border-radius: 5px;
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
        margin-top: 27px;
        svg {
            margin-right: 5px;
        }
    }

    
`;


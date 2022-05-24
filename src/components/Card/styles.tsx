import styled from 'styled-components';

export const Container = styled.a`
    width: 200px;
    height: 340px;
    position: relative;
    transition: all .2s ease-in-out;
    overflow: hidden;
    display: inline-block;
    background: #000;
    border-radius: 1rem;
    transform-origin: center;
    will-change: transform;
    &:hover {
        transform: scale(1.05);
    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        content: "";
        background: #000;
        background: linear-gradient(0deg,rgba(0,0,0,.9) 0,rgba(0,0,0,.7) 37%,rgba(0,0,0,0) 100%);
        transition: all .3s ease-in-out;
        opacity: 1;
    }
`;

export const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
export const Info = styled.div`
    height: auto;
    top: unset;
    bottom: 0;
    left: 0;
    padding: 1.5vw;
    z-index: 20;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    min-width: fit-content;
`
export const Title = styled.span`
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
    color: #fff;
    font-size: 1rem;
    
`

export const Caption = styled.p`

`
export const Date = styled.p`
    font-size: 1.2rem ;
`
import styled, { css } from 'styled-components';

export const Container = styled.a`
    width: 14%;
    min-width: 250px;
    min-height: 380px;
    position: relative;
    transition: all .2s ease-in-out;
    overflow: hidden;
    display: inline-block;
    background: #000;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);
    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        content: "";
        background: #000;
        background: linear-gradient(300deg,rgba(0,0,0,.9) 0,rgba(0,0,0,.7) 40%,rgba(0,0,0,0) 100%);
        transition: all .3s ease-in-out;
        opacity: 1;
        user-select: none;
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
    height: 100%;
    top: unset;
    bottom: 0;
    left: 0;
    padding: 1.5vw;
    z-index: 2;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    min-width: fit-content;
    justify-content: flex-end;
`

export const Favorite = styled.div<{ active: boolean }>`
    top: 5px;
    right: 10px;
    z-index: 5;
    position: absolute;
    font-size: 40px;
    color: ${props => props.active ? props.theme.colors.favorite : props.theme.colors.light };
    &:hover {
        transform: scale(1.2);
    }
`
export const Title = styled.span`
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
    color: #fff;
    font-size: 1rem;
`

export const Date = styled.p`
    font-size: 0.8rem ;
    margin: 0
`
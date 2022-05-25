import styled, { css } from 'styled-components';

interface ContainerInterface {
    active: boolean
}

export const Container = styled.a<ContainerInterface>`
    width: 14%;
    min-width: 250px;
    height: 20%;
    min-height: 340px;
    position: relative;
    transition: all .2s ease-in-out;
    overflow: hidden;
    display: inline-block;
    background: #000;
    box-shadow: 0px 0px 20px ${props => props.active ? props.theme.colors.primary : 'black'};
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

export const Date = styled.p`
    font-size: 0.8rem ;
    margin: 0
`
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
export const Title = styled.h1`
    font-size: clamp(1rem, 1vw, 2rem);
    margin: 0;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;
export const Item = styled.li`
    display: flex;
    background: ${props => props.theme.colors.dark};
    padding: 15px;
    border-radius: 5px;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
`;
export const Thumbnail = styled.img`
    width: 50px;
    margin-right: 10px;
`;

export const Name = styled.span`
    font-size: clamp(0.8rem, 1vw, 1rem);
    cursor: pointer;
    text-decoration: underline;
`;

export const Delete = styled.button`
    color: ${props => props.theme.colors.primary};
    background: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    place-items: center;
`;
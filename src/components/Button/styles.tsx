import styled from "styled-components";

export const Container = styled.button`
    border: none;
    padding: 10px;
    color: ${props => props.theme.colors.primary};
    background:  ${props => props.theme.colors.light};
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
`;

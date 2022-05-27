import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 30px;
    place-items: center;
    * {
        margin-top: 0;
    }
    @media screen and (max-width: 768px){
        place-items: flex-start;
        flex-direction: column;
        max-height: 70vh;
    }
`;

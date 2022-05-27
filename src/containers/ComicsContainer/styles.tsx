import styled from "styled-components";

export const Wrapper = styled.section.attrs({
    id: "cards"
})`
    height: 100vh;
    display: flex;
    margin: 0% 10%;
    margin-top: 50px;
    gap: 30px;
    
    @media only screen and (max-width: 992px) {
        flex-direction: column
    }
`;
export const Box = styled.div<{ flex: number }>`
    display: flex;
    flex-direction: column;
    flex: ${props => props.flex};
    gap: 30px;
`;

export const Container = styled.div`
    display: flex;
    place-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`;
export const Title = styled.h1`
    text-align: center;
    font-size: clamp(1.5rem, 2vw, 3rem);
    margin: 0;
`;

export const NotFoundText = styled.h1`
    text-align: center;
    font-size: clamp(1rem, 1vw, 3rem);
`;
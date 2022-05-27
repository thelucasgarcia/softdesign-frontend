import styled from 'styled-components';

export const SearchBar = styled.div.attrs({
    id: 'search-bar'
})`
    position: relative;
    height: 80px;
    border-radius: 120px;
    transition: 0.15s ease width;
    z-index: 2;
    width: min(500px, 100%);
    box-shadow: 0px 0px 10px ${props => props.theme.colors.primary};
    
    p {
        margin-left: 20px;
    }
`;

export const Form = styled.form`
    position: relative;
    height: 82px;
    cursor: auto;
    border-radius: 120px;
`;
export const Element = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    border-radius: 120px;
`;
export const InputCover = styled.div`
    position: absolute;
    top: 0;
    right: 40px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.light};
    padding-left: 20px;
    padding-right: 45px;
`;
export const Input = styled.input`
    display: block;
    width: 100%;
    font-size: 20px;
    border: none;
    padding: 30px 0;
    margin: 0;
    background-color: transparent;
    transition: 0.15s ease margin-top;
    cursor: auto;

    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 82px;
    height: 82px;
    font-size: 30px;
    line-height: 1;
    padding: 26px;
    margin: 0;
    border: 0;
    transition: 0.2s ease background-color;
    border-radius: 50%;
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.primary};
    box-shadow: none;
    cursor: pointer;
`;

import styled from 'styled-components';
import { Button } from '../../GlobalStyled';

export const Container = styled.div`
    display: grid;
    text-align: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    background: #fff;
    margin: 10px 30px;
    border-radius: 10px;
    padding: 5px 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    width: 850px;
    max-width: 1200px;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`;

export const Form = styled.form``;

export const Label = styled.label`
    display: ${props => props.inputLabel ? 'block' : ''};
    text-align: center;
    text-transform: ${props => props.uppercase ? 'uppercase' : ''};
`;

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #0051ff;
    padding: 5px 10px;
    background: #fff;
    width: ${props => props.useWidth ? '200px' : ''};
`;

export const InputItems = styled.div`
    margin: 20px 0;
`;

export const Submit = styled(Button)`
    background-color: rgba(40, 191, 6, 1);

    &:hover {
        background-color: rgba(40, 191, 6, 0.5);
    }
`;
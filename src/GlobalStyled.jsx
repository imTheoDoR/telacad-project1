import styled from "styled-components";

// am folosit props pentru culoarea de background
// pentru a diferentia putin butoanele de schimbarea
// listei de utilizatori si articole
export const Button = styled.button`
    background-color: ${props => props.secondary ? '#523cc1' : '#2d63bb'};
    padding: 10px 20px;
    border: 0;
    border-radius: 10px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: ${props => props.secondary ? '#523cc190' : '#2d63bb90'};
    }
`;
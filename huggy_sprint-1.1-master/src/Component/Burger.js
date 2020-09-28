import React, {useState} from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';


const StyledBurger = styled.div`
    width:2rem;
    height:2rem;
    top:15px;
    position:fixed;
    right:20px;
    display:flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index:20;

    div {
        width:2rem;
        height:0.25rem;
        background-color:${({open})=>open ? '#ccc' : '#FFF'};
        border-radius:10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : '(rotate(0))'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(0)' : '(translateX(100%))'};
            opacity:${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : '(rotate(0))'};
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(true)
    return (
        <>
            <StyledBurger open={!open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open}/>
        </>
    )
}

export default Burger

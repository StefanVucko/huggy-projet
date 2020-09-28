import React from 'react';
import styled from 'styled-components';



const Ul = styled.ul`
    
        list-style: none;
        display: flex;
        flex-flow: row nowrap;

    li{
        padding: 18px 10px;
    }

    @media (max-width: 3000px) {

        flex-flow: column nowrap;
        background-color:#292929;
        position:fixed;
        transform: ${({ open }) => open ? 'translateX(100%)' : '(translateX(0))'};
        top:0;
        right:0;
        height:100vh;
        width:250px;
        padding-top:3.5rem;
        li{
            color:#fff
        }
    }
`

const RightNav = ({open}) => {
    return (
    <Ul open={open}> 
        <li>Profil</li>
        <li>Paramétres</li>
        <li>Qui nous sommes</li>
        <li>Restez en contact</li>
    </Ul>
    )
}

export default RightNav

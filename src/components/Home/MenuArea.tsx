import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom';
import Header from "../Header";
import { colors } from '../../styles'

interface MenuAreaProps {
    displayMenu: boolean;
    connected: boolean,
    address: string,
    chainId: number,
    killSession: () => void,
    openModal: () => void,
}

interface MenuContainerProps {
    status: boolean;
}

const MenuContainer = styled.ul<MenuContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    justify-content: space-between;
    z-index: 999 !important;
    @media (max-width: 1200px) {
        max-width: 96%;
        flex-direction: column;
        transform: translateY(${props => props.status ? '-100%' : '40%'});
        background: rgba(${colors.main}, 0.4);
        backdrop-filter: blur(4px);
        width: 96%;
        position: absolute;
        z-index: 10;
        border-radius: 20px;
        border: 1px solid rgba(${colors.border});
    }
`
const MmenuItem = styled.li`
    background: -webkit-linear-gradient(${colors.main}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    margin: 0 1em;
    text-transform: uppercase;
    @media (max-width: 1200px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 9px ${colors.main}, 0 0 2em ${colors.secondary}, 0 0 1em darkblue;
    }
`

const MenuArea: React.FC<MenuAreaProps> = ({
    killSession,
    openModal,
    displayMenu,
    connected,
    address,
    chainId,
}) => {
    const history = useHistory()
    const smoothScroll = (id: string) => {
        document.querySelector(`#${id}`)?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <MenuContainer status={displayMenu}>
            <MmenuItem onClick={() => smoothScroll("whypeno")}>Why Peño?</MmenuItem>
            <MmenuItem onClick={() => smoothScroll("roadmap")}>RoadMap</MmenuItem>
            <MmenuItem onClick={() => smoothScroll("tokenomics")}>Tokenomics </MmenuItem>
            <MmenuItem onClick={() => smoothScroll("about")}>About Peño </MmenuItem>
            <MmenuItem onClick={() => smoothScroll("showcase")}>Show CASE</MmenuItem>
            <MmenuItem onClick={() => smoothScroll("gang")}>Jalapeño Gang</MmenuItem>
            <MmenuItem onClick={() => history.push("/airdrop")}>AIRDROP</MmenuItem>
        </MenuContainer>
    )
}

export default MenuArea

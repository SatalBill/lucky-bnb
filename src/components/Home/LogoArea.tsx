import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { colors } from "../../styles";
import logo from '../../assets/logo.png'

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 0%;
    cursor: pointer;
    z-index: 5;
`
const Logo = styled.img`
    cursor: pointer;
    @media (max-width: 768px) {
        width: 160px;
    }
`
const LogoText = styled.p`
    background: -webkit-linear-gradient(${colors.secondary}, ${colors.greenGrad});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;
`

function LogoArea() {
    let history = useHistory()
    const goToHome = () => {
        history.push("/")
    }
    return (
        <LogoContainer onClick={goToHome}>
            {/* <Logo src={logo} alt="logo" /> */}
            <LogoText>Jalapeño</LogoText>
        </LogoContainer>
    )
}

export default LogoArea

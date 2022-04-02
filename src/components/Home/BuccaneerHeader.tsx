import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LogoArea from './LogoArea'
import MenuArea from './MenuArea'
import SocialLinkArea from './SocialLinkArea'
import ToggleMenuIcon from './ToggleMenuIcon'

const Wrapper = styled.div`
    // position: absolute;
    // top:0;
    // left:0;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    height: 100px;
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2%;
    @media screen and (max-width: 1330px) {
        width: 100%;
        height: 65px;
        margin: 0;
        padding-left:2%;
        padding-right:2%; 
    }
`
interface Props {
    connect: () => void,
    setIsHide: (e: any) => void,
    isHide: boolean,
    connected: boolean,
    address: string,
    chainId: number,
    killSession: () => void
}

const BuccaneerHeader: React.FC<Props> = ({
    connect,
    killSession,
    setIsHide,
    isHide,
    connected,
    address,
    chainId,
}) => {
    const [currentWidth, setCurrentWidth] = useState(0)
    useEffect(() => {
        function updateSize() {
            setCurrentWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    useEffect(() => {
        setIsHide(true)
        // eslint-disable-next-line
    }, [currentWidth]);
    return (
        <Wrapper>
            <LogoArea />
            <MenuArea
                displayMenu={isHide}
                connected={connected}
                address={address}
                chainId={chainId}
                killSession={killSession}
                openModal={connect}
            />
            {/* <SocialLinkArea openModal={connect} connected={connected} /> */}
            <ToggleMenuIcon openMenu={() => setIsHide(!isHide)} />
        </Wrapper>
    )
}

export default BuccaneerHeader

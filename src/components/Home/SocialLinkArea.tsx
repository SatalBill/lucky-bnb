import React from 'react'
import styled from 'styled-components'
import twitter from '../../assets/images/twitter.png'
import telegram from '../../assets/images/telegram.png'
import wallet from '../../assets/images/wallet.png'

interface SocialAreaProps {
    openModal: () => void
    connected: boolean
}
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 0em;
    position: absolute;
    top: 35px;
    right: 5%;
    @media (max-width: 960px) {
        display: none;
    }
    // border: 1px solid #4F5578;
`

const SocialIcon = styled.img`
    width: 16px;
`
export const Twitter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 15px;
    margin: 0 0.6em;
    background: linear-gradient(180deg, #5bae32 1.89%, #a5dd61 99.63%);
    &:hover {
        transition: all 0.3s;
        background: linear-gradient(180deg, #a5dd61 1.89%, #5bae32 99.63%);
        cursor: pointer;
    }
`
export const Discord = styled(Twitter)`
    background: transparent;
    border: 1px solid #a5dd61;
    &:hover {
        background: linear-gradient(180deg, #a5dd61 1.89%, #5bae32 99.63%);
        border: none;
    }
`

const SocialLinkArea: React.FC<SocialAreaProps> = ({ openModal, connected }) => {
    return (
        <SocialContainer>
            <Twitter>
                <SocialIcon src={twitter} />
            </Twitter>
            <Discord>
                <SocialIcon src={telegram} />
            </Discord>
            {/* {!connected && <SocialIcon src={wallet} onClick={openModal} />} */}
        </SocialContainer>
    )
}

export default SocialLinkArea

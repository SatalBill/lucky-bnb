import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import aboutTitle from '../../assets/b-home/about-title.png'
import collect from '../../assets/b-home/nft1.png'
import stake from '../../assets/b-home/nft2.png'
import chops from '../../assets/b-home/nft3.png'
import dao from '../../assets/b-home/nft4.png'
import barImage from '../../assets/b-home/barImage.png'

const AboutContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em 5%;
    border: 1px solid red;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`
const AboutTitle = styled.img`
    width: 100%;
    max-width: 1400px;
    margin: 4em 0;
    @media (max-width: 768px) {
        margin: 1em 0;
    }
`
const NftContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 2;
    div {
        width: 100%;
        h3 {
            color: white;
            @media (max-width: 768px) {
                font-size: 24px;
            }
        }
        h5 {
            color: white;
            @media (max-width: 768px) {
                font-size: 16px;
            }
        }
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
const NftImage = styled.img`
    width: 100%;
    max-width: 700px;
    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 1000px) {
        width: 70%;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`
const BarImage = styled.img`
    position: absolute;
    left: 20%;
    top: 600px;
    z-index: 1;
    @media (max-width: 1800px) {
        left: 21%;
    }
    @media (max-width: 1700px) {
        left: 22%;
    }
    @media (max-width: 1600px) {
        left: 23%;
    }
    @media (max-width: 1300px) {
        left: 26%;
    }
    @media (max-width: 1200px) {
        left: 23%;
        top: 500px;
        height: 1100px;
    }
    @media (max-width: 1000px) {
        display: none;
    }
`
function NftItem( props: any ) {
    return (
        <NftContainer>
            <NftImage src={props.nft.url} alt={props.nft.title} />
            <div>
                <h3>{props.nft.title}</h3>
                <h5>{props.nft.content}</h5>
            </div>
        </NftContainer>
    )
}

const About = () => {

    const aboutData = [
        { id: 1, title: "COLLECT", url: collect, content: "Collect LAMBoze to your heart’s content, with a selection of 8,888 to choose from. Loot boxes and breeding will be added in the near future, so there is no limit to how many LAMBoze you can have!" },
        { id: 2, title: "STAKE", url: stake, content: "Stake LAMBoze to your heart’s content, with each NFT you own adding +10 to your $CHOPS wallet every day through our staking system. Amass a fortune of tokens as you sit back and watch." },
        { id: 3, title: "$CHOPS", url: chops, content: "Our token $CHOPS will be one of the most versatile tokens on the ethereum blockchain come early 2022. With it, you can:\n-Buy Physical LAMBoze merch\n-Bet your tokens in our “Crash” style betting game\n-Play in the LAMBoze arcade and win big\nPlus much more." },
        { id: 4, title: "DAO", url: dao, content: "By buying even one NFT, you cain access to the LAMBoze DAO community, an exclusive, community run organization that can dictate the direction and use of project assets. A community wallet will be set up, and DAO members will get a slice of any NFT purchased using it." }
    ]

    return (
        <AboutContainer>
            <h1>asdas</h1>
        </AboutContainer>
    )
}

export default About

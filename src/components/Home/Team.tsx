import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { withStyles } from "@material-ui/core/styles";
import { colors } from '../../styles'
import teamTitle from '../../assets/b-home/team.png'
import team1 from '../../assets/b-home/team1.png'
import team2 from '../../assets/b-home/team2.png'
import team3 from '../../assets/b-home/team3.png'
import dao from '../../assets/b-home/nft4.png'
import barImage from '../../assets/b-home/barImage.png'

const AboutContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 86%;
    margin: 2em 7%;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`
const TeamTitle = styled.img`
    width: 100%;
    max-width: 450px;
    margin: 4em 0;
    @media (max-width: 768px) {
        margin: 1em 0;
    }
`
const NftContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: relative;
    p {
        color: white;
        font-size: 20px;
    }
`
const InfoContainer = styled.div`
    position: absolute;
    bottom: 60px;
`
const IconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const NftImage = styled.img`
    width: 100%;
    max-width: 500px;
`
const TeamContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
const Twitter = withStyles({
    root: {
        color: `white`,
        cursor: 'pointer'
    },
})(TwitterIcon);
const Instagram = withStyles({
    root: {
        color: `white`,
        cursor: 'pointer'
    },
})(InstagramIcon);

function TeamItem(props: any) {
    return (
        <NftContainer>
            <NftImage src={props.team.url} alt={props.team.title} />
            <InfoContainer>
                <p>{props.team.title}</p>
                <IconContainer>
                    <Twitter />
                    <Instagram />
                </IconContainer>
            </InfoContainer>
        </NftContainer>
    )
}

const Team = () => {

    const teamData = [
        { id: 1, title: "ANDY30", url: team1 },
        { id: 2, title: "JAMES M", url: team2 },
        { id: 3, title: "JAMES M", url: team3 }
    ]

    return (
        <AboutContainer id="team">
            <TeamTitle src={teamTitle} alt="teamTitle" />
            <TeamContainer>
                {
                    teamData.map((item) => (
                        <TeamItem key={item.id} team={item} />
                    ))
                }
            </TeamContainer>
        </AboutContainer>
    )
}

export default Team

import React from 'react'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import largeLogo from '../../assets/images/logo-large.png'
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'

// Material ui style
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    textCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

// styled-components 
const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 450px;
    max-height: 450px;
    min-width: 200px;
    min-height: 200px;
`
const Title = styled.p`
    font-size: 40px;
    font-weight: 600;
    color: white;
    // font-family: "gemunu-libre.bold";
`
const Description = styled.p`
    font-size: 18px;
    color: white;
    line-height: 1.5;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`
const OutlineButton = styled.button`
    max-width: 272px;
    font-size: 20px;
    font-family: "NexaTextDemo-Light";
    width: 45%;
    height: 54px;
    border-radius: 20px;
    border: 1px solid rgb(${colors.fontColor});
    color: rgb(${colors.fontColor});
    background: transparent;
    // background: linear-gradient(180deg, rgba(16,23,65,1) 0%, rgba(12,35,64,1) 100%);
    margin: 1em 0;
    transition: all 0.2s ease-out;
    box-shadow: 0 4px 8px 0 rgba(${colors.border});

    @media (max-width: 550px) {
        width: 90%;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        background: rgb(${colors.fontColor});
    }
`
const NoBorderButton = styled(OutlineButton)`
    border: none;
    background: transparent;
    box-shadow: none;
    margin-right: 2em;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(${colors.border});
    }
`

interface Props {
}

const BannerContent: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={7} className={classes.textCont}>
                <Title>Lorem ipsum dolor sit amet</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis in risus vitae rhoncus.</Description>
                <ButtonContainer>
                    <OutlineButton>White Paper</OutlineButton>
                    <NoBorderButton>Lorem ipsum</NoBorderButton>
                </ButtonContainer>
            </Grid>
            <Grid item xs={12} md={5} className={classes.imgCont}>
                <BannerImg src={largeLogo} />
            </Grid>
        </Grid>
    )
}

export default BannerContent

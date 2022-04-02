import React from 'react'
import Container from '@material-ui/core/Container';
// import styled from 'styled-components'
import BuccaneerHeader from '../components/Home/BuccaneerHeader'
// import { colors } from "../styles";
import { makeStyles } from '@material-ui/core/styles';

import backImg from '../assets/b-roadmap/back.jpg';
import backgroundImg from '../assets/b-roadmap/back-up.jpg';
import backgroundRoad from '../assets/b-roadmap/back-down.jpg';
import bannerTitle from '../assets/b-roadmap/banner-title.png';
import roadmap from '../assets/b-roadmap/roadmap.png';

import ConnectBtn from '../components/B_ConnectBtn';
import Timelines from '../components/Roadmap/Timeline';
import DiscordBox from '../components/B_discordBox';
import Footer from '../components/B_footer';




interface Props {
    connect: () => void;
    setIsHide: (e: any) => void;
    killSession: () => void;
    isHide: boolean;
    connected: boolean;
    address: string;
    chainId: number;
} 

// Material ui style
const useStyles = makeStyles((theme) => ({
    motherWrap:{
        width:'100%',  
        backgroundImage: `url(${backImg})`,
        left:0,
        right:0,
        backgroundSize:'cover',
        padding: '0 !important'
    },  
    bannerWrap:{
        width:'100%',
        textAlign:'center',
        marginTop:'20vh',        
    },
    bannerTitle:{
        width: '80%'
    },
    bannerText:{
        width:'100%',
        color:'white',
        fontSize:'24px',
        textAlign:'center',
        marginTop:'40px',
        marginBottom:'40px',
        padding: '5px',
        textShadow: '-2px 3px 10px rgba(0,0,0,0.59)', 

    },
    connectBtnWrap:{
        marginTop:'40px'
    },
    roadmap:{
        width:'28%'
    },
    roadmapWrap:{
       width:'100%', 
       padding: '0px !important',
       margin:'0px !important',
       top: '58vw',

    },
    roadmapBack:{
        width:'100%', 
    },
    roadmapMain:{
        width:'100%', 
        textAlign:'center',
        marginTop:'300px'
    },
    roadmapImg:{
        width:'30%',
        marginTop:'1em'
    },
    timeline:{
        marginTop:'70px',
        padding:'0 !important'
    },
    discord:{
        padding:'0 !important',
             },
    discordWrap:{        
        marginTop:'50px !important'
    },
    [theme.breakpoints.up("xs")]: { 
        bannerWrap:{ 
            marginTop:'10vh'
        },
        connectBtnWrap:{
            marginTop:'5px'
        },
        bannerText:{ 
            fontSize:'18px',  
            lineHeight:'20px'
        }, 
        roadmapMain:{ 
            marginTop:'50px'
        },
        bannerTitle:{
            width: '90%'
        },
        roadmapImg:{
            width:'38%',
            marginTop:'1em'
        },
        
    },
    [theme.breakpoints.up("sm")]: {
        bannerText:{ 
            fontSize:'18px',  
            lineHeight:'20px'
        }, 
        bannerWrap:{ 
            marginTop:'15vh'
        },
        roadmapMain:{ 
            marginTop:'50px'
        },
        bannerTitle:{
            width: '90%'
        },
    },
    [theme.breakpoints.up("md")]: {
        bannerText:{ 
            fontSize:'24px',  
            lineHeight:'36px'
        },
        bannerWrap:{ 
           marginTop:'16vh'
        },
        roadmapMain:{ 
            marginTop:'100px'
        },
    },
    [theme.breakpoints.up("lg")]: {
        bannerText:{ 
            fontSize:'24px',  
            lineHeight:'36px'
        },
        bannerWrap:{ 
           marginTop:'18vh'
        },
        roadmapWrap:{
            marginTop:'500px'
        },
        roadmapMain:{ 
            marginTop:'200px'
        },
    },
    [theme.breakpoints.up("xl")]: {
        bannerText:{ 
            fontSize:'24px', 
        },
        bannerWrap:{ 
            marginTop:'24vh'
        },
        roadmapMain:{ 
            marginTop:'300px'
        },
        
    },
    
}));

 

const BermudaScreen = (props: Props) => {
    const classes = useStyles();
    return (
        <Container  maxWidth="xl" className={classes.motherWrap}> 
                   
                <BuccaneerHeader
                    connect={props.connect}
                    isHide={props.isHide}
                    setIsHide={(e: any) => props.setIsHide(e)}
                    connected={props.connected}
                    address={props.address}
                    chainId={props.chainId}
                    killSession={props.killSession}
                />
                <div className={classes.bannerWrap}>
                    <img className={classes.bannerTitle} src={bannerTitle} alt="bannerTitle"/>
                    <p className={classes.bannerText}>
                        8,888 beautiful sheep have been born on the ethereum blockchain, and they're yours for the taking! <br/> Hold a LAMBoze NFT so you can stake them for 10 $CHOPS a day, and gain access to our esteemed DAO community.
                    </p>
                    <div className={classes.connectBtnWrap}>
                        <ConnectBtn btn={"Connect to Wallet"} />
                    </div>  
                    <div className={classes.roadmapMain}>
                        <img className={classes.roadmapImg} src={roadmap} alt="roadMap"/>
                        <Container maxWidth="lg" className={classes.timeline}>
                            <Timelines />
                        </Container>  
                    </div> 
                    <div className={classes.discordWrap}> 
                        <DiscordBox /> 
                    </div> 
                </div>    
                <Footer />  
        </Container>
    )
}

export default BermudaScreen

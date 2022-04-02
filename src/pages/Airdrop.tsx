import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Grid from "@material-ui/core/Grid";
import { colors } from "../styles";

import BuccaneerHeader from "../components/Home/BuccaneerHeader";
import sectionOneImg from "../assets/pepper/sect-1-back.png";
import smallPepper from "../assets/pepper/smallPepper.png";
import airdropImg from "../assets/pepper/airdrop.png";

const useStyles = makeStyles((theme) => ({
  particlesContainer: {
    width: "100%",
    height: "90vh",
    position: "absolute",
    left: 0,
    top: 0,
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },
  motherWrap: {
    position: "relative",
    width: "100%",
    left: 0,
    right: 0,
    backgroundSize: "cover",
    padding: 0,
  },
  sectionOne: {
    // width: "100%",
    // backgroundImage: `url(${sectionOneImg})`,
    // backgroundSize: "cover",
    alignItems: "center",
    // height: '100vh',
    display: "flex",
  },
  textWrap: {
    width: "100%",
    position: "absolute",
    top: 150,
    padding: "0 5%",
    textAlign: "center",
  },
  textItem1: {
    fontSize: 50,
    zIndex: 999,
    textTransform: 'uppercase',
  },
  textItem2: {
    fontSize: "44px",
    fontWeight: 700,
  },
  sectionTwo: {
    width: "100%",
    minHeight: "80vh",
    alignItems: "center",
    display: "flex",
  },
  subWrapText: {
    padding: "2% !important",
    borderRadius: 16,
    [theme.breakpoints.down("sm")]: {
      backdropFilter: 'blur(12px)',
      background: '#fff2',
      margin: '1em'
    },
  },
  subWrapImg: {
    margin: "auto",
    padding: "2% !important",
    textAlign: "center",
  },
  imgs: {
    width: "100%",
  },
  whyWheText: {
    color: "white",
    fontSize: 22,
    marginBottom: 20,
  },
  whyWheSubText: {
    color: "white",
  },
  whyWheQueText: {
    color: "#D81DFA",
    fontSize: "24px",
    fontWeight: 700,
  },
  sectionThree: {
    width: "100%",
    minHeight: "60vh",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: "5% 0",
  },
  title3Wrap: {
    width: "100%",
    padding: "0 5% 0 5% !important",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    marginTop: "2em",
  },
  sliderWrap: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
    },
  },
  gangWrap: {
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
    },
  },
  roadmapWrap: {
    width: "100%",
    paddingLeft: 0,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    marginTop: "2em",
  },
  textTokenomics: {
    fontSize: "46px",
  },
  subWrapImgPie: {
    margin: "auto",
    padding: "2% !important",
    textAlign: "center",
  },
  sectionFive: {
    width: "100%",
    background: "#1D133C",
    minHeight: "60vh",
    alignItems: "center",
    display: "flex",
    padding: "0 5em",
  },
  rewardBox: {
    width: "100%",
  },
  rewardSubWrap: {
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#d065d6",
    borderRadius: "10px",
    borderWidth: "2.5px",
    backgroundColor: "#f0f8ff1a",
    padding: "4%",
    minHeight: "370px",
  },
  rewardSubTitle: {
    color: "white",
    fontSize: "22px",
    fontWeight: 700,
  },
  rewardSubUnderline: {
    width: "50%",
    height: "3px",
    backgroundColor: "#23ffff",
    marginLeft: "25%",
  },
  rewardContents: {
    width: "100%",
    textAlign: "left",
    marginTop: "2em",
  },
  rewardContentItem: {
    display: "flex",
    marginTop: "10px",
  },
  rewardText: {
    marginLeft: "5px",
    marginTop: "-3px",
    color: "white",
  },
  pointerImg: {
    maxHeight: "18px",
  },
  stepContents: {
    textAlign: "center",
    color: "white",
    lineHeight: "1.25em",
  },
  stepWrap: {
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#d065d6",
    borderRadius: "10px",
    borderWidth: "2.5px",
    backgroundColor: "#f0f8ff1a",
    padding: "6% 2%",
    minHeight: "190px",
    width: "100%",
  },
  stepLinked: {
    color: "#d81dfa",
    textDecoration: "underline",
  },
  addressText: {
    color: "white",
    fontSize: "24px",
  },
  tokenText: {
    color: "white",
    fontSize: "18px",
    marginRight: "0.5em",
  },
  tokenWrap: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  copyImg: {
    maxHeight: "25px",
    maxWidth: "25px",
    marginTop: "auto",
    marginBottom: "auto",
    cursor: "pointer",
    "&:active": {
      opacity: 0.7,
    },
  },
  buyButton: {
    backgroundColor: "#d81dfa",
    color: "white",
    padding: "20px 30px",
    borderRadius: "10px",
    fontSize: "18px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  buttonWrap: {
    textAlign: "center",
    width: "100%",
  },
  contact: {
    marginTop: "10px",
    color: "white",
    fontSize: "16px",
  },
  footerWrap: {
    width: " 100%",
    textAlign: "center",
    color: "white",
    borderStyle: "solid",
    borderWidth: "0",
    borderTopWidth: "1px",
    borderColor: "#bc4bff",
    padding: "1.5em 0",
  },
  [theme.breakpoints.down("xs")]: {},
  [theme.breakpoints.down("sm")]: {
    textItem1: {
      fontSize: "26px",
    },
    textItem2: {
      fontSize: "28px",
      fontWeight: 700,
    },
    subWrapText: {
      padding: "10% !important",
    },
    subWrapImgPie: {
      marginTop: "-2em",
    },
    tokenText: {
      fontSize: "10px",
    },
    textTokenomics: {
      fontSize: "40px",
    },
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const SectOneBg = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  @media (max-width: 768px) {
    min-height: 80vh;
    margin-top: 0;
    width: 100%;
  }
  @media (max-width: 600px) {
    min-height: 100vh;
    width: 100%;
  }
`
const HeadTitle = styled.p`
  background: -webkit-linear-gradient(${colors.main}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Poppins-Medium", "sans-serif";
  text-align: center;
`
const flyingAnim = () => keyframes`
  from {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  to {
    transform: rotate(-5deg);
  }  
`
const SmallPepper = styled.img`
  margin-right: 1em;
`
const TokenomicsText = styled.span`
  font-size: 22px;
  font-family: "Poppins-SemiBold", sans-serif;
  color: white;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`
const ShowCard = styled.div`
  width: 280px !important;
  height: 280px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #0E0E11;
  img {
    width: 210px !important;
    margin: auto;
  }
`
const AirdropLeftImg = styled.img`
  width: 100%;
  max-width: 800px;
`

interface Props {
  connect: () => void;
  setIsHide: (e: any) => void;
  killSession: () => void;
  isHide: boolean;
  connected: boolean;
  address: string;
  chainId: number;
}


const Airdrop = (props: Props) => {
  const classes = useStyles();

  return (
    <Container className={classes.motherWrap} maxWidth="xl">
      <BuccaneerHeader
        connect={props.connect}
        isHide={props.isHide}
        setIsHide={(e: any) => props.setIsHide(e)}
        connected={props.connected}
        address={props.address}
        chainId={props.chainId}
        killSession={props.killSession}
      />
      <Grid container>
        <Grid id="whypeno" item md={12} className={classes.sectionTwo}>
          <SectOneBg src={sectionOneImg} alt="sectionOneImg" />
          <Container maxWidth="lg" style={{ zIndex: 3 }}>
            <Grid container spacing={3}>
              <Grid item sm={12} md={6} className={classes.subWrapImg}>
                <AirdropLeftImg
                  src={airdropImg}
                  alt="sss"
                />
              </Grid>
              <Grid item sm={12} md={6} className={classes.subWrapText}>
                <span className={classes.whyWheSubText} style={{ fontSize: 25 }}>
                  BSC Freight Services thought it was a bright idea to transport Peño by air. Scorching hot temperatures forced the crew to Airdrop the cargo...
                </span> <br /><br /><br />
                <HeadTitle className={classes.whyWheText}>Welcome to Peño Airdrop</HeadTitle>
                <span className={classes.whyWheSubText} style={{ fontSize: 17 }}>
                  Since Peño is a buyback Project, our Airdrop will be structured around those principles. To qualify, members must prove they have held pioneer meme coins from day one.
                </span> <br /><br /><br />
                <HeadTitle className={classes.whyWheText}>How to claim Peño;</HeadTitle>
                <span className={classes.whyWheSubText}>
                  <SmallPepper src={smallPepper} alt="smallPepper" /> Sign up for Whitelist
                </span> <br /><br />
                <span className={classes.whyWheSubText}>
                  <SmallPepper src={smallPepper} alt="smallPepper" /> Follow Peño Twitter and Discord
                </span> <br /><br />
                <span className={classes.whyWheSubText}>
                  <SmallPepper src={smallPepper} alt="smallPepper" /> Must have held Shiba Inu and Safemoon from 2020 to 2021.
                </span> <br /><br />
                
              </Grid>

            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Airdrop;

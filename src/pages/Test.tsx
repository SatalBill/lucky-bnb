import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Lottie from 'react-lottie';
import Grid from "@material-ui/core/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { colors } from "../styles";

import BuccaneerHeader from "../components/Home/BuccaneerHeader";
import sectionOneImg from "../assets/pepper/sect-1-back.png";
import headerImg from "../assets/pepper/headerImg.png";
import smallPepper from "../assets/pepper/smallPepper.png";
import sectionTwoRightImg from "../assets/pepper/whypeno.png";
import sectionThreeRightImg from "../assets/pepper/roadmap.png";
import sectionThreeTokenomicsImg from "../assets/pepper/tokenomics.png";
import fireBar from "../assets/pepper/fireBar.png";
import twitter from "../assets/images/twitter.png";
import discord from "../assets/images/discord.png";
import animationData from '../assets/campingfire.json'
import fireAnimationData from '../assets/fireBarAnim.json'
import jeronimo from '../assets/showcase/jeronimo.png'
import cyrus from '../assets/showcase/cyrus.png'
import jayden from '../assets/showcase/jayden.png'
import branton from '../assets/showcase/branton.png'
import cofounder from '../assets/showcase/cofounder.png'
import developer from '../assets/showcase/developer.png'
import egan from '../assets/showcase/egan.png'
import graphicDesigner from '../assets/showcase/graphicDesigner.png'
import marketing from '../assets/showcase/marketing.png'

import gangCofounder2 from '../assets/gang/cofounder2.png'
import gangCofounder from '../assets/gang/cofounder.png'
import gangMarketing from '../assets/gang/marketing.png'
import gangDesigner from '../assets/gang/designer.png'
import gangDeveloper from '../assets/gang/developer.png'
import thermometerImg from '../assets/pepper/thermometerImg.png'
import "./particle.css";

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
    margin: "auto",
    padding: "2% !important",
  },
  subWrapImg: {
    margin: "auto",
    padding: "2% !important",
    textAlign: "center",
  },
  imgs: {
    width: "90%",
    maxWidth: 447
  },
  whyWheText: {
    color: "white",
    fontSize: 60,
    marginBottom: 50,
    textTransform: "uppercase",
  },
  whyWheSubText: {
    color: "white",
    fontSize: 18,
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
    whyWheText: {
      fontSize: "40px",
    },
    textTokenomics: {
      fontSize: "40px",
    },
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const SocialIcon = styled.img`
  margin: 0.5em;
  cursor: pointer;
`;

const SectOneBg = styled.img`
  width: 100vw;
  margin-top: -100px;
  min-height: 80vh;
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
const StyledHeaderImage = styled.img`
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`
const WhiteListButton = styled.div`
  width: 285px;
  height: 55px;
  border-radius: 10px;
  background: -webkit-linear-gradient(${colors.secondary}, ${colors.main});
  // background: grey;
  color: white;
  font-size: 22px;
  font-family: "Poppins-Medium", "sans-serif";
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em auto;
  cursor: pointer;
  &:hover {
    background: -webkit-linear-gradient(${colors.main}, ${colors.secondary});
    cursor: not-allowed;
  }
  // &:active {
  //   transform: translateY(1px);
  // }
`
const SmallPepper = styled.img`
  margin-right: 1em;
`
const RoadmapImgContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
  }
`
const StyledLottie = styled.div`
  min-width: 280px;
  height: 215px;
`
const RoadmapImg = styled.img`
  width: 100%;
  z-index: 2;
  max-width: 510px;
  @media (max-width: 1440px) {
    max-width: 410px;
  }
`
const ThermometerImg = styled.img`
  height: 645px;
  z-index: 2;
  @media (max-width: 960px) {
    height: 410px;
  }
`
const TokenomicsText = styled.span`
  font-size: 22px;
  font-family: "Poppins-SemiBold", sans-serif;
  color: white;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`
const TokenomicsValue = styled(TokenomicsText)`
  color: #FEC95A;
`
const TokenomicSubTitle = styled.p`
  font-size: 40px;
  color: #FEC95A;
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
const GangCard = styled(ShowCard)`
  width: 240px !important;
  height: 240px !important;
`
const FireBarImg = styled.div`
  margin: 100px 0;
  width: 100%;
  height: 121px;
  background-image: url(${fireBar});
`
const GangItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  P:nth-child(2) {
    background: -webkit-linear-gradient(${colors.main}, ${colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 19px;
    text-transform: uppercase;
  }
  p:nth-child(3) {
    font-size: 16px;
    color: #FEC95A;
    text-transform: uppercase;
  }
`
const GradientBorderCard = styled.div`
  padding: 2px;
  background: linear-gradient(${colors.main}, ${colors.secondary});
  max-width: 284px;
`
const PepperTitle = styled.div`
  margin: 70px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  span { color: white; }
`
const LottieContainer = styled.div`
  margin-top: -300px;
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


const Test = (props: Props) => {
  const classes = useStyles();
  const twitterLink = "https://mobile.twitter.com/peno2021";
  const discordLink = "https://discord.gg/fJm8cjGBJK";
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptionsFireBar = {
    loop: true,
    autoplay: true,
    animationData: fireAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "ease",
    // customPaging: (i: any) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       height: "30px",
    //       background: "red",
    //       margin: "0 5px",
    //       color: "red",
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 1193,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 921,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const data = [
    { id: 1, src: jeronimo },
    { id: 2, src: cyrus },
    { id: 3, src: jayden },
    { id: 4, src: branton },
    { id: 5, src: cofounder },
    { id: 6, src: developer },
    { id: 7, src: egan },
    { id: 8, src: graphicDesigner },
    { id: 8, src: marketing },
  ]
  const gangData = [
    { id: 1, src: gangCofounder2, name: "jeronimo Phoenix", job: "CO - Founder" },
    { id: 2, src: gangCofounder, name: "Admani Bankman", job: "co - Founder" },
    { id: 3, src: gangMarketing, name: "Ignatius Lauda", job: "mARKETING" },
    { id: 4, src: gangDesigner, name: "Aiden Rand", job: "gRAPHIC DESIGN" },
    { id: 5, src: gangDeveloper, name: "Azar Knuth", job: "DEVELOPER" }
  ]

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
        <Grid item md={12} className={classes.sectionOne}>
          <SectOneBg src={sectionOneImg} alt="sectionOneImg" />
          {/* <LottieContainer>
            <Lottie
              options={defaultOptionsFireBar}
              height={1340}
              width={1920}
            />
          </LottieContainer> */}

          <div className={classes.textWrap}>
            <HeadTitle className={classes.textItem1}>
              Down bad? Flame on with Jalapeño
            </HeadTitle>
            <StyledHeaderImage src={headerImg} alt="headerImg" />
            <WhiteListButton>Sign up for whitelist</WhiteListButton>
          </div>
        </Grid>
        <Grid id="whypeno" item md={12} className={classes.sectionTwo}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item sm={12} md={5} className={classes.subWrapImg}>
                <img
                  className={classes.imgs}
                  src={sectionTwoRightImg}
                  alt="sss"
                />
              </Grid>
              <Grid item sm={12} md={7} className={classes.subWrapText}>
                <HeadTitle className={classes.whyWheText}>Why Peño? </HeadTitle>
                <span className={classes.whyWheSubText}>
                  Peño was hatched on a  simple foundation- cheap and fast transactions, low affordable entries, and entirely community-driven.
                </span> <br /><br /><br />
                <span className={classes.whyWheSubText}>
                  Having fun while investing is essential; meme coins and stocks have proven that. Peño embodies the fun perfectly through our simple staking and buyback system.
                </span> <br /><br /><br />
                <span className={classes.whyWheSubText}>
                  We aim to keep u laughing throughout the entire journey. I mean, who doesn`t love Mexican cuisines? Now let us eat!
                </span> <br /><br /><br />
                <span className={classes.whyWheSubText}>
                  Arrrrribaaaaa y que no Falte el Jalapeño !
                </span> <br /><br /><br />
              </Grid>

            </Grid>
          </Container>
        </Grid>
        <Grid id="roadmap" item md={12} className={classes.sectionTwo}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item sm={12} md={5} className={classes.subWrapImg} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <HeadTitle className={classes.whyWheText}>ROADMAP</HeadTitle>
                <div style={{ textAlign: 'left' }}>
                  <span className={classes.whyWheSubText}>
                    <SmallPepper src={smallPepper} alt="smallPepper" /> Peño whitelist Sign Up
                  </span> <br /><br />
                  <span className={classes.whyWheSubText}>
                    <SmallPepper src={smallPepper} alt="smallPepper" /> Peño Presale
                  </span> <br /><br />
                  <span className={classes.whyWheSubText}>
                    <SmallPepper src={smallPepper} alt="smallPepper" /> Peño Pancakeswap LP
                  </span> <br /><br />
                  <span className={classes.whyWheSubText}>
                    <SmallPepper src={smallPepper} alt="smallPepper" /> Peño CG & CMC
                  </span> <br /><br />
                  <span className={classes.whyWheSubText}>
                    <SmallPepper src={smallPepper} alt="smallPepper" /> Peño Staking
                  </span> <br /><br />
                  <span className={classes.whyWheSubText}>
                    <SmallPepper src={smallPepper} alt="smallPepper" /> Peño Buy Back Events  Begin
                  </span> <br /><br />
                  <span className={classes.whyWheSubText}>
                    <SmallPepper src={smallPepper} alt="smallPepper" /> Peño NFT
                  </span> <br /><br />
                </div>
              </Grid>
              <Grid item sm={12} md={7} className={classes.subWrapText}>
                <RoadmapImgContainer>
                  <RoadmapImg
                    src={sectionThreeRightImg}
                    alt="RoadmapImg"
                  />
                  <StyledLottie>
                    <Lottie
                      options={defaultOptions}
                      height={215}
                      width={280}
                    />
                  </StyledLottie>
                </RoadmapImgContainer>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid id="tokenomics" item md={12} className={classes.sectionThree}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item sm={12} md={12} className={classes.title3Wrap}>
                <HeadTitle className={classes.whyWheText}>TOKENOMICS</HeadTitle>
              </Grid>
              <Grid item sm={12} md={5} className={classes.subWrapImgPie}>
                <img
                  className={classes.imgs}
                  src={sectionThreeTokenomicsImg}
                  alt="sss"
                />
              </Grid>
              <Grid item sm={12} md={5} className={classes.subWrapText}>
                <TokenomicSubTitle>Total Peño Supply 50 Trillion </TokenomicSubTitle> <br />
                <TokenomicsText>Peño Charity 5% </TokenomicsText> <br />
                <TokenomicsValue>2,500,000,000,000 </TokenomicsValue> <br /><br />
                <TokenomicsText>Peño Staking 35%</TokenomicsText> <br />
                <TokenomicsValue>17,500,000,000,000</TokenomicsValue> <br /><br />
                <TokenomicsText>Spicy Burn 5% At Launch </TokenomicsText> <br />
                <TokenomicsValue>2,500,000,000,000</TokenomicsValue> <br /><br />
                <TokenomicsText>Peño Marketing and growth 15% </TokenomicsText> <br />
                <TokenomicsValue>7,500,000,000,000</TokenomicsValue> <br /><br />
                <TokenomicsText>TEAM TOKENS 15%</TokenomicsText> <br />
                <TokenomicsValue>7,500,000,000,000</TokenomicsValue> <br /><br />
                <TokenomicsText>Peño Early Inverstors,and Burning events 25%</TokenomicsText> <br />
                <TokenomicsValue>12,500,000,000,000</TokenomicsValue>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid id="showcase" item md={12} className={classes.sectionThree}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item sm={12} md={12} className={classes.title3Wrap}>
                <HeadTitle className={classes.whyWheText}>SHOWCASE</HeadTitle>
              </Grid>
              <Grid item sm={12} md={12} className={classes.sliderWrap}>
                <Slider {...settings}>
                  {data.map(item => (
                    <GradientBorderCard key={item.id}>
                      <ShowCard>
                        <img src={item.src} alt={item.src} />
                      </ShowCard>
                    </GradientBorderCard>
                  ))}
                </Slider>
              </Grid>

            </Grid>
          </Container>
        </Grid>
        <FireBarImg>.</FireBarImg>
        <Grid id="gang" item md={12} className={classes.sectionThree}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item sm={12} md={12} className={classes.title3Wrap}>
                <HeadTitle className={classes.whyWheText}>Jalapeño Gang</HeadTitle>
              </Grid>
              <Grid item sm={12} md={12} className={classes.gangWrap}>
                {
                  gangData.map((item: any) => (
                    <GangItem key={item.id}>
                      <GradientBorderCard>
                        <GangCard>
                          <img src={item.src} alt={item.src} />
                        </GangCard>
                      </GradientBorderCard>
                      <p>{item.name}</p>
                      <p>{item.job}</p>
                    </GangItem>
                  ))
                }
              </Grid>

            </Grid>
          </Container>
        </Grid>
        <Grid id="about" item md={12} className={classes.sectionTwo}>
          <Container maxWidth="lg">
            <Grid container spacing={3} style={{ borderBottom: '1px solid #fff8', paddingBottom: '4em' }}>
              <Grid item sm={12} md={8} className={classes.subWrapImg} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <HeadTitle className={classes.whyWheText}>About Peño </HeadTitle>
                <div style={{ textAlign: 'left' }}>
                  <span className={classes.whyWheSubText}>
                    Peño is a community-driven meme token on the Binance blockchain
                    designed to reward its members. Our focus is to bring value to our holders by rewarding Peño tokens and helping them build their portfolios by issuing periodic buybacks.
                  </span> <br /><br />
                  <span className={classes.whyWheSubText}>
                    Essentially the more Peño investors stake, the more tokens they earn from other projects.
                    The community will vote on buybacks as milestones are reached. A Peño Thermometer displayed on our website will fill as the price of Peño rises.
                  </span> <br /><br />
                  <span className={classes.whyWheSubText}>
                    Once the Peño Pepper has reached its burning point, staking emission stops, and market buys begin. This process will repeat itself throughout the project's lifetime, and the goal is to promote longevity and valuation.
                  </span> <br /><br />
                  <span className={classes.whyWheSubText}>
                    Peño is the of its kind. A token solely made to help investors increase their crypto holdings. Deployed on Binance Chain to deter high gas fees
                    and provide a smooth experience while investing.
                  </span> <br /><br />
                </div>
              </Grid>
              <Grid item sm={12} md={4} className={classes.subWrapText}>
                <RoadmapImgContainer>
                  <ThermometerImg
                    src={thermometerImg}
                    alt="thermometerImg"
                  />
                </RoadmapImgContainer>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <PepperTitle>
          <HeadTitle className={classes.whyWheText}>peppers</HeadTitle>
          <span>contact us</span>
          <span>Peno2021@outlook.com</span>
          <div>
            <SocialIcon src={twitter} onClick={() => window.open(twitterLink, "_blank")} />
            <SocialIcon src={discord} onClick={() => window.open(discordLink, "_blank")} />
          </div>
        </PepperTitle>
      </Grid>
      <hr />
      <PepperTitle>
        <span style={{ margin: '1em' }}>Copyright ©  2022 . All rights reserved.</span>
      </PepperTitle>
    </Container>
  );
};

export default Test;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'; 
import useMediaQuery from '@material-ui/core/useMediaQuery';

import map1 from '../../assets/b-roadmap/map1.png';
import map2 from '../../assets/b-roadmap/map2.png';
import map3 from '../../assets/b-roadmap/map3.png';
import map4 from '../../assets/b-roadmap/map4.png';
import map5 from '../../assets/b-roadmap/map5.png';
import map6 from '../../assets/b-roadmap/map6.png';
import map7 from '../../assets/b-roadmap/map7.png';


const useStyles = makeStyles((theme) => ({
  paperLeft: {
    padding: '6px 16px',
    backgroundColor:'#143516',
    borderColor:'#38632b',
    borderStyle:'solid',
    borderWidth:'2px',
    textAlign:'left',
    borderRadius:'15px !important',
    marginTop:'-50px', 
    marginBottom:'100px', 
    boxShadow:'4px 4px 24px 1px rgba(10,97,39,0.79)' 
  },
  paperRight: {
    padding: '6px 16px',
    backgroundColor:'#143516',
    borderColor:'#38632b',
    borderStyle:'solid',
    borderWidth:'2px',
    textAlign:'left',
    borderRadius:'15px !important',
    marginTop:'-50px',   
    marginBottom:'100px',
    boxShadow:'4px 4px 24px 1px rgba(10,97,39,0.79)' 
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  mapLeft:{
    maxWidth:'120px', 
    marginTop:'-50px',
    boxShadow:'4px 4px 24px 1px rgba(10,97,39,0.79)' 
  },
  mapRight:{
    maxWidth:'120px',    
    marginTop:'-50px',
    boxShadow:'4px 4px 24px 1px rgba(10,97,39,0.79)' 
  },
  mapText:{
      color:'white'
  },
  dotMap:{
    borderColor:'#fff',
    width:'25px',
    height:'25px',
    backgroundColor:'#1fdb32',
    borderWidth:'5px',
    zIndex:3 
  },
  crossline:{
   height:'4px',
   width:'130px',
   top:'19px',
   position:'absolute',
   backgroundColor:'#2bd712',
   zIndex: 1   
  },
  wrap:{
      zIndex:3, 
  },
  hiddenRight:{
      display:'block'
  }, 
  [theme.breakpoints.down("xs")]: { 
    hiddenRight:{
        display:'none'
    }, 
    crossline:{ 
        width:'85px !important', 
        left:'15px !important'
    }, 
    paperRight: { 
        marginBottom:'50px', 
    },
    paperLeft: { 
        marginBottom:'50px', 
    },
    
  },
}));

export default function Timelines() {
  const classes = useStyles(); 
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Timeline align={matches?"left":"alternate"}>
      <TimelineItem>
        <TimelineOppositeContent className={`${classes.wrap} ${classes.hiddenRight} `}>
           <img className={classes.mapLeft} src={map1} alt="timeline"/>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" className={classes.dotMap}> 
          </TimelineDot>
          <span className={`${classes.crossline}`}></span>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.wrap}>
          <Paper elevation={3} className={classes.paperLeft}>
              <h6 className={classes.mapText}>
                DEC 26TH OFFICIAL LAUNCH OF LAMBOZE NFT
              </h6>
              <p className={classes.mapText}>
                Minting process begins
              </p>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem  >
        <TimelineOppositeContent className={`${classes.wrap} ${classes.hiddenRight} `}>
          <img className={classes.mapRight} src={map2} alt="timeline"/>
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot variant="outlined" className={classes.dotMap}> 
            </TimelineDot>
            <span className={classes.crossline}></span>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.wrap}>
            <Paper elevation={3} className={classes.paperRight}>
              <h6 className={classes.mapText}>
                DEC 27-28TH RELEASE OF DUR FULLY FUNCTIONAL DAO.
              </h6>
              <p className={classes.mapText}>
                Release of the $CHOPS token NFT sales distributed as 10% to the LAMBoze team of this 10%, 50% will go straight to the DAO wallet to provide funding for DAO NFT purchases<br/>
                90% to the seller<br/>
                The DAO purchases (x- whatever the community votes as a base NFT DAO currency) to place into a https://fractional.art/ vault. The fractionalization of these assets will create our token $CHOPS, which is distributed to holders through staking. Staked LAMBoze will earn 10 $CHOPS a day. Holders completely control what the DAO spends money on, through votes on the Discord. After mint, we will purchase 2 (x- whatever the community votes as a base NFT DAO currency) This’ll provide liquidity for $CHOPS via fractionalizing Staking will be implemented soon after,         </p>
            </Paper>
        </TimelineContent>
      </TimelineItem>  

      <TimelineItem>
        <TimelineOppositeContent className={`${classes.wrap} ${classes.hiddenRight} `}>
           <img className={classes.mapLeft} src={map3} alt="timeline"/>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" className={classes.dotMap}> 
          </TimelineDot>
          <span className={classes.crossline}></span>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.wrap}>
          <Paper elevation={3} className={classes.paperLeft}>
              <h6 className={classes.mapText}>
               JAB 2ND STAHING IMPLEMENTED ON THE LAMBOZE WEBSITE
              </h6> 
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent className={`${classes.wrap} ${classes.hiddenRight} `}>
          <img className={classes.mapRight} src={map4} alt="timeline"/>
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot variant="outlined" className={classes.dotMap}> 
            </TimelineDot>
            <span className={classes.crossline}></span>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.wrap}>
            <Paper elevation={3} className={classes.paperRight}>
              <h6 className={classes.mapText}>
                Q1 22
              </h6>
              <p className={classes.mapText}>
                Cleaning/Breeding functionality implemented on website. Cleaning your LAMBoze NFT will allow you to breed it with your other cleaned NFTs, making a LAMB baby. There will be a unique, top secret usecase for these babies… 
                <br/>
                NFT Merch implemented on website. We take pride in being one of the few NFTs with an explicit connection to physical goods. Other physical objects (mugs, mousepads), merch, and even 3D printing of your NFT will be added to the marketplace over time as well. All purchases will be paid in $CHOPS. 
                <br/>
                V2 Roadmap Release
              </p>
            </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent className={`${classes.wrap} ${classes.hiddenRight} `}>
           <img className={classes.mapLeft} src={map5} alt="timeline"/>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" className={classes.dotMap}> 
          </TimelineDot>
          <span className={classes.crossline}></span>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.wrap}>
          <Paper elevation={3} className={classes.paperLeft}>
              <h6 className={classes.mapText}>
                LATE Q1 2022
              </h6>
              <p className={classes.mapText}>
                Launch of LAMB ARCADE on the website. A crash-style game will be the first game to be implemented in the LAMB ARCADE, allowing you to gain massive amounts of $CHOPS. More games will be added over time. Launch of a lottery system on the website You will be able to purchase tickets with $CHOPS. LAMBoze holders will be whitelisted for future NFT projects and airdrops.
              </p>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent className={`${classes.wrap} ${classes.hiddenRight} `}>
          <img className={classes.mapRight} src={map6} alt="timeline"/>
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot variant="outlined" className={classes.dotMap}> 
            </TimelineDot>
            <span className={classes.crossline}></span>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.wrap}>
            <Paper elevation={3} className={classes.paperRight}>
              <h6 className={classes.mapText}>
                Q2 2022
              </h6>
              <p className={classes.mapText}>
                Q2 2022<br/>
                NFT Loot Crate system implemented on website Spend $CHOPS or $ETH to get multiple NFTs, with a chance of a rare or higher. Official LAMBoze video game added to the LAMB ARCADE 10 $CHOPS to play, can win up to 30 $CHOPS. Digital Merch store implemented on website. Customize your LAMBoze sheep with items and accessories! 
              </p>
            </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent className={`${classes.wrap} ${classes.hiddenRight} `}>
           <img className={classes.mapLeft} src={map7} alt="timeline"/>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" className={classes.dotMap}> 
          </TimelineDot>
          <span className={classes.crossline}></span>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.wrap}>
          <Paper elevation={3} className={classes.paperLeft}>
              <h6 className={classes.mapText}>
                More games will be added over time
              </h6>
              <p className={classes.mapText}>
                Launch of LAMB ARCADE on the website.<br/>
                A crash-style game will be the first game to be implemented in the LAMB ARCADE, allowing you to gain massive amounts of $CHOPS. More games will be added over time (PVE, etc) Launch of a lottery system on the website You will be able to purchase tickets with $CHOPS. LAMBoze holders will be whitelisted for future NFT projects and airdrops. 
              </p>
          </Paper>
        </TimelineContent>
      </TimelineItem>       
    </Timeline>
  );
}
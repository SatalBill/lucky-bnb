import React from 'react';
import { useHistory } from "react-router-dom";  
import Button from '@material-ui/core/Button'; 
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import JoinDiscordBtn from './B_joinDiscordBtn';

// Material ui style
const useStyles = makeStyles((theme) => ({
      discordWrap: {
        padding: '20px 10%',
        backgroundColor:'#143516',
        borderColor:'#38632b',
        borderStyle:'solid',
        borderWidth:'2px',
        textAlign:'center',
        borderRadius:'15px !important',
        marginTop:'-50px',   
        marginBottom:'70px',
        boxShadow:'4px 4px 24px 1px rgba(10,97,39,0.79)', 
      },   
      title:{
        lineHeight:'1.2em',
        color:'white'
      }, 
      description:{
        lineHeight:'1.2em',
        color:'white',
        marginTop:'20px'
      },
      discord:{
        padding:'0 3%',
        marginBottom:'50px'
      },
      connectBox:{
        backgroundColor:'#143516',
        borderColor:'#38632b',
        borderStyle:'solid',
        borderWidth:'1px', 
        borderRadius:'15px !important',
        display:'flex',
        justifyContent:'space-between',
        marginTop:'30px' 
      },
      emailBox:{
        border:'none',
        background:'transparent',
        color:'white !important',
        marginLeft:'3%',
        marginTop:'8px',
        marginBottom:'8px'
      },
      normalShow:{
        display:'block'
      },
      miniShow:{
        display:'none',
        marginTop:'10px'
      },
      [theme.breakpoints.down("xs")]: { 
            btn:{  
                padding:'8px 20px !important', 
                maxWidth:'180px',  
                fontSize:'12px'
            },
            normalShow:{
                display:'none'
            },
            miniShow:{
                display:'block',
                marginTop:'10px'
            },
      },     
}));

export default function DiscordBox() { 
  const classes = useStyles(); 
  return (
      <Container maxWidth="lg" className={classes.discord}>
        <div className={classes.discordWrap}>
            <h4 className={classes.title}>
                BECOME A MEMBER OF THE AMAZING <br/> LAMBOZE COMMUNITY ON DISCORD
            </h4>
            <p className={classes.description}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
            </p>
            <div className={classes.connectBox}>
                <InputBase className={classes.emailBox} placeholder='Enter Your Email Address'  inputProps={{ 'aria-label': 'naked' }}/>
                <div className={classes.normalShow}>
                   <JoinDiscordBtn  btn={"Join Our Discord"} />
                </div> 
            </div>  
            <div className={classes.miniShow}>
                <JoinDiscordBtn btn={"Join Our Discord"} />
            </div>   
        </div>  
      </Container>
    
  );
}

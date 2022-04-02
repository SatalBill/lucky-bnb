import React from 'react';
import { useHistory } from "react-router-dom";  
import Button from '@material-ui/core/Button'; 
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import JoinDiscordBtn from './B_joinDiscordBtn';

// Material ui style
const useStyles = makeStyles((theme) => ({
      footer: { 
        backgroundColor:'#3a5e23', 
        textAlign:'center',    
        minHeight:'70px',
        boxShadow:'4px 4px 24px 1px rgba(10,97,39,0.79)', 
        margin:'auto',
        display:'flex',
        justifyContent:'center' 
      },   
      footerText:{
          color:'white',
          fontSize:'20px',
          marginTop:'20px'
      }
      
       
}));

export default function Footer() { 
  const classes = useStyles(); 
  return (
      <Container maxWidth="xl" className={classes.footer}>
        <p className={classes.footerText}>
          Copyright © 2021 lamboze. All rights Reserved. 
        </p>
      </Container>
    
  );
}

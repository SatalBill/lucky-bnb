import React from 'react';
import { useHistory } from "react-router-dom";  
import Button from '@material-ui/core/Button'; 
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    btn: string;
}

// Material ui style
const useStyles = makeStyles((theme) => ({
   btn:{ 
     backgroundImage: 'linear-gradient(180deg, #3fc958  20%, #1c6a2a  120%) !important', 
     boxShadow:'0.872px 9.962px 20px 0px rgb(12 78 165 / 30%) !important',
     padding:'10px 30px !important',
     color:'white',
     borderRadius:'50px !important',
     maxWidth:'220px',
     textTransform:'none',
     fontWeight:700,
     fontSize:'16px'
   },
   [theme.breakpoints.down("xs")]: { 
      btn:{  
        padding:'8px 20px !important', 
        maxWidth:'180px',  
        fontSize:'12px'
      },
   },    
}));

export default function ConnectBtn(props : Props) { 
  const classes = useStyles();
  let history =useHistory();
  const sign_up = ()=>{
    
  }  
  return (
    <>
      <Button className={classes.btn} >{props.btn}</Button>  
    </>  
  );
}

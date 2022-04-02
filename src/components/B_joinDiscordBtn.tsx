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
     backgroundImage: 'linear-gradient(180deg, #2ba341 20%, #13561f 120%) !important', 
     padding:'10px 30px !important',
     color:'white',
     borderRadius:'15px !important',
     maxWidth:'200px',
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

export default function JoinDiscordBtn(props : Props) { 
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

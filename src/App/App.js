import React from 'react';
import './App.css';
import SideMenu from "../component/SideMenu"
import Header from "../component/Header"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles ({
  appMain:{
    paddingLeft: '0px',
    width: '100%',
    position: 'absolute'
  }
})


function App() {
const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}> 
        <Header />
      </div>
    </>
  );
}

export default App;

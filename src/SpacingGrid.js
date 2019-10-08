import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import Bootstrap from './Bootstrap.png';
import clogo from './clogo.jpg';
import cplus from './c++.png';
import java from './java.png';
import Python from './Python.jpg';
import machine from './machine.png';
import machinepython from './machinepython.png';
import tensor from './tensor.png';
import mongo from './mongo.png';
import sql from './sql.png';
import mysql from './mysql.png';
import pl from './pl.png';
import py from './py.jpg';
import HTML from './HTML.png';
import CSS from './CSS.png';
import js from './js.png';
import android from './android.png';
import ios from './ios.jpg';
import swift from './swift.jpg';
import kotlin from './kotlin.png';
import Bootstrap from './Bootstrap.jpg';
import ds from './ds.png';
import dbms from './dbms.png';
import os from './os.jpg';
import network from './network.png';
import git from './git.png';
import docker from './docker.png';
import kubernetes from './kubernetes.png';
import jenkins from './jenkins.png';
import aws from './aws.jpg';
import azure from './azure.png';
import gc from './gc.png';
import ac from './ac.png';

import {  } from '@material-ui/system';
import './Spacing.css'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: 'Black',
    fontSize: '30px',
    fontFamily: 'Serif',
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <Grid container spacing={4}>
      
        <Grid item xs>
          <Paper className={classes.paper}>Programming Languages</Paper>
         
          <div class="row">
  <div class="column">
    <img src={clogo} width='80px' height='80px' />
    <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>C</p>
  </div>
  <div class="column">
  <img src={cplus} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>C++</p>
  </div>
  <div class="column">
  <img src={java} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Java</p>
  </div>
  <div class="column">
  <img src={Python} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Python</p>
  </div>
</div>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Machine Learning</Paper>
           
          <div class="row">
  <div class="column">
    <img src={machine} width='80px' height='80px' />
    <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Machine Learning</p>
  </div>
  <div class="column">
  <img src={machinepython} width='120px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Machine Learning with Python</p>
  </div>
  <div class="column">
  <img src={tensor} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Tensor Flow</p>
  </div>
  <div class="column">
  <img src={py} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>PyTorch</p>
  </div>
</div>
        </Grid>
        
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs>
          <Paper className={classes.paper}>DataBase Tutorials</Paper>
          <div class="row">
  <div class="column">
    <img src={mongo} width='100px' height='80px' />
    <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Mongo DB</p>
  </div>
  <div class="column">
  <img src={sql} width='120px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>SQL</p>
  </div>
  <div class="column">
  <img src={mysql} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>MySQL</p>
  </div>
  <div class="column">
  <img src={pl} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>PL/SQL</p>
  </div>
</div>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Web Development</Paper>
          <div class="row">
  <div class="column">
    <img src={HTML} width='80px' height='80px' />
    <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>HTML</p>
  </div>
  <div class="column">
  <img src={CSS} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>CSS</p>
  </div>
  <div class="column">
  <img src={js} width='100px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>JavaScript</p>
  </div>
  <div class="column">
  <img src={Bootstrap} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Bootstrap</p>
  </div>
</div>
        </Grid>
        
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs>
          <Paper className={classes.paper}>Mobile App Development</Paper>
          <div class="row">
  <div class="column">
    <img src={android} width='80px' height='80px' />
    <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Android</p>
  </div>
  <div class="column">
  <img src={ios} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>IOS</p>
  </div>
  <div class="column">
  <img src={swift} width='100px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Swift</p>
  </div>
  <div class="column">
  <img src={kotlin} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Kotlin</p>
  </div>
</div>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Computer Science</Paper>
          <div class="row">
  <div class="column">
    <img src={ds} width='80px' height='80px' />
    <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Data Structures</p>
  </div>
  <div class="column">
  <img src={dbms} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Database Management System</p>
  </div>
  <div class="column">
  <img src={os} width='120px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Operating System</p>
  </div>
  <div class="column">
  <img src={network} width='80px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Networking</p>
  </div>
</div>
        </Grid>
        
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs>
          <Paper className={classes.paper}>DevOps</Paper>
          <div class="row">
  <div class="column">
    <img src={git} width='100px' height='80px' />
    <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Git</p>
  </div>
  <div class="column">
  <img src={docker} width='100px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Docker</p>
  </div>
  <div class="column">
  <img src={kubernetes} width='100px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Kubernetes</p>
  </div>
  <div class="column">
  <img src={jenkins} width='100px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Jenkins</p>
  </div>
</div>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Cloud Services</Paper>
          <div class="row">
  <div class="column">
    <img src={aws} width='100px' height='80px' />
    <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Amazon Web Services</p>
  </div>
  <div class="column">
  <img src={gc} width='100px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Google Cloud</p>
  </div>
  <div class="column">
  <img src={azure} width='100px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Microsoft Azure</p>
  </div>
  <div class="column">
  <img src={ac} width='100px' height='80px' />
  <p class="para" style={{fontFamily:'Serif', fontSize:'20px'}}>Alibaba Cloud</p>
  </div>
</div>
        </Grid>
       
      
</Grid> 
  
    </div>
   

  )
}

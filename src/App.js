import React , { Component } from 'react';
import ReactDOM from 'react-dom';

//import ReactDOM from 'react-dom';
//import App from './App';
//import PrimarySearchAppBar from './Demo';
import SpacingGrid from './SpacingGrid';
//import Corousel from './Corousel';
import Top from './Header';
import logo from "./LOGO1.jpg";
import './photo.css';
import Basic from './Basic';
import Coding from './Coding';
import './HeaderLogo.css';



//import SimpleTable from './Tables';
//SpacingGrid();

//PrimarySearchAppBar();
//import * as serviceWorker from './serviceWorker';


         class App extends React.Component {
            render(){
            return (
              <div>
                
                 <Top />
                
                <div class = "HeaderLogo"> <img src={logo} width = '250px' height = '250px' /></div>
                <a href=""><h3 style={{textAlign:"center", padding:30, backgroundColor: '#E3E2DF', marginTop:'10px', marginBottom:'40px', fontFamily:'Serif', color:'#9A1750'}}>Tutorials Library</h3></a>
                <SpacingGrid />
                <a href=""><h4 style={{textAlign:"center", padding:30, backgroundColor: '#E3E2DF', marginTop:'10px', marginBottom:'10px', fontFamily:'Serif', color:'#9A1750'}}>Coding Arena</h4></a>
                <Coding />
                <Basic />
               
                
              </div>
            );
          }
         }

         
   


export default App;
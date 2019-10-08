import React , { Component } from 'react';
import ReactDOM from 'react-dom';

//import ReactDOM from 'react-dom';
//import App from './App';
//import PrimarySearchAppBar from './Demo';
import SpacingGrid from './SpacingGrid';
//import Corousel from './Corousel';
import Top from './Header';
import logo from "./logo.png";
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
                <h3 style={{textAlign:"center", padding:30, backgroundColor: '#F0EFEF', marginTop:'10px', marginBottom:'10px', fontFamily:'Serif'}}>Tutorials Library</h3>
                <SpacingGrid />
                <h4 style={{textAlign:"center", padding:30, backgroundColor: '#F0EFEF', marginTop:'10px', marginBottom:'10px', fontFamily:'Serif'}}>Coding Arena</h4>
                <Coding />
                <Basic />
               
                
              </div>
            );
          }
         }

         
   


export default App;
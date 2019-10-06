import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import ReactDOM from 'react-dom';
//import App from './App';
import PrimarySearchAppBar from './Demo';
import SpacingGrid from './SpacingGrid';
import end from './components';

//import SimpleTable from './Tables';
//SpacingGrid();

//PrimarySearchAppBar();
//import * as serviceWorker from './serviceWorker';




         function App() {
            return (
              <div>
                 <PrimarySearchAppBar />
                <h1 style={{}}>FirstTech</h1>
                <h2 style={{}}>Your Place to Learn</h2>
                <h3 style={{}}>Tutorials Library</h3>
                <SpacingGrid />
                <h4 style={{}}>Coding Arena</h4>
                <footer />
               
                
              </div>
            );
          }

         
   


export default App;
import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import PrimarySearchAppBar from './Demo';
import SpacingGrid from './SpacingGrid';
SpacingGrid();

PrimarySearchAppBar();
//import * as serviceWorker from './serviceWorker';



class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "FirstTech",
         content: "Your Place to Learn",
         middle: "Tutorials Library",
         coding: "Coding Arena"
      }
   }
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
           <h3>{this.state.middle}</h3>
           <h4>{this.state.coding}</h4>
<SpacingGrid />
<PrimarySearchAppBar />
         </div>
      );
   }
}

export default App;
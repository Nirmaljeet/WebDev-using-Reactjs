import React  from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//import './sorry.html';


const Header = () => {
        return (
            <nav>
               <nav class="navbar navbar-dark bg-dark">
    <div class="nav-wrapper">
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sorry.html">C</a></li>
        <li><a href="badges.html" style={{fontFamily:'Serif'}}>C++</a></li>
        <li><a href="collapsible.html" style={{fontFamily:'Serif'}}>JavaScript</a></li>
        <li><a href="collapsible.html" style={{fontFamily: 'Serif'}}>ReactJS</a></li>
        <li><a href="collapsible.html" style={{fontFamily:'Serif'}}>NodeJS</a></li>
      </ul>
    </div>
  </nav>
  </nav>
        )
}
         export default function Top() {
     
            return(
                <div>
                     <Header />
                   
                </div>
            )
        }
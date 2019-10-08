import React from 'react';
import image from './image.png';
import './jumbotron.css';
import Photo from './Photo.png';
import './card.css';
const Code = () => {
    return(
        <div class="jumbotron">
        <div class="row">
        <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" style={{textAlign:'center', padding:'30', backgroundColor: '#F0EFEF', marginTop:'10px', marginBottom:'10px', fontFamily:'Serif'}}> Coding Platform for your Website</h5>
                        <a href="#" class="btn btn-primary" style={{textAlign:'center', padding:'30',  marginTop:'5px', marginBottom:'10px',fontFamily:'Serif' }}>How it works?</a>
                        <p class="card-text"></p>
                        <img src = {image } width = '330px' height = '280px'  />
                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" style={{textAlign:'center', padding:'30', backgroundColor: '#F0EFEF', marginTop:'10px', marginBottom:'10px',fontFamily:'Serif'}}> Are you Ready ?</h5>
                        <a href="#" class="btn btn-primary" style={{textAlign:'center', padding:'30',  marginTop:'5px', marginBottom:'10px',fontFamily:'Serif'}}>Yes i am ready to code</a>
                        <p class="card-text"></p>
                        <img src = {Photo } width = '330px' height = '280px'  />
                    </div>
                </div>
            </div>

          
            </div>
            </div>
    )
}
        export default function Coding() {
return (
    <div>
        <Code />
    </div>
)
}

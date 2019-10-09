import React from 'react';
import image from './image.png';
import './jumbotron.css';
import Photo from './Photo.png';
import './card.css'
import Sorr from './sorry';

const Code = () => {
    return(
        <div class="jumbotron">
        <div class="row">
        <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" style={{textAlign:'center', padding:'30px', backgroundColor: '#1F2833', marginTop:'10px', marginBottom:'10px', fontFamily:'Serif', color:'#66FCF1'}}> Coding Platform for your Website</h5>
                        <a href='./sorry' className="btn btn-primary" style={{textAlign:'center', padding:'30px',  marginTop:'5px', marginBottom:'10px',fontFamily:'Serif' , }} role="Button">How it works?</a>
                        <p class="card-text"></p>
                        <img src = {image } width = '330px' height = '280px'  />
                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" style={{textAlign:'center', padding:'30px', backgroundColor: '#1F2833', marginTop:'10px', marginBottom:'10px',fontFamily:'Serif', color:'#66FCF1'}}> Are you Ready ?</h5>
                        <a href="#" class="btn btn-primary" style={{textAlign:'center', padding:'30px',  marginTop:'5px', marginBottom:'10px',fontFamily:'Serif'}}>Yes i am ready to code</a>
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

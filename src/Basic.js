import React ,{ Component }from 'react';

const Base = () => {
    return(
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" style={{fontFamily:'Serif'}}>About Us</h5>
                        <p class="card-text" style={{fontFamily:'Serif'}}>We are a Team of fun-loving programmers :)</p>
                        <a href="#" class="btn btn-primary" style={{fontFamily:'Serif'}}>Want to know us?</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"style={{fontFamily:'Serif'}}>Contact Us</h5>
                        <p class="card-text"style={{fontFamily:'Serif'}}>Click below button to contact us.</p>
                        <a href="#" class="btn btn-primary"style={{fontFamily:'Serif'}}>Want to contact us?</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"style={{fontFamily:'Serif'}}>Support Us</h5>
                        <p class="card-text"style={{fontFamily:'Serif'}}>Paytm, Google Pay, Phone Pay -> 8920884655 :))</p>
                        <a href="#" class="btn btn-primary"style={{fontFamily:'Serif'}}>Want to support us?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Basic()  {
    
        return (
            <div>
                <Base />
            </div>
    )
}

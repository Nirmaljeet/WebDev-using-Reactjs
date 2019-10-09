import React from 'react';

const Base = () => {
    return(
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" style={{fontWeight:'Bold'}}>About Us</h5>
                        <p class="card-text">We are a Team of fun-loving programmers :)</p>
                        <a href="#" class="btn btn-primary">Want to know us?</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" style={{fontWeight:'Bold'}}>Contact Us</h5>
                        <p class="card-text">Click below button to contact us.</p>
                        <a href="#" class="btn btn-primary">Want to contact us?</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" style={{fontWeight:'Bold'}}>Support Us</h5>
                        <p class="card-text">Paytm, Google Pay, Phone Pay -> 8920884655 :))</p>
                        <a href="#" class="btn btn-primary">Want to support us?</a>
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

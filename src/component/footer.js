import React from "react";

import FacebookLogo from "./assets/facebooklogo";
import Pinterestlogo from "./assets/pinterestlogo";

export default function footer(){
    return<>
    <div className="mangerfooter">
    <div className="mainfooter">
        <h4>
            GET IN TOUCH!
        </h4>
        <h5>kariiimssamirr@gmail.com</h5>
        <h5>01129833816</h5>

    </div>
    <button id="conbtn">CONTACT US</button>
    <div className="mainfooter">
      <FacebookLogo />
      <Pinterestlogo />
        <h5>COPYRIGHTS@2017</h5>
        

    </div>
    </div>
    </>
}
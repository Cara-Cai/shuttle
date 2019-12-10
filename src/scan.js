import React from 'react';
import './scan.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Scan() {
    return (
      <div className="scan">
        <Link to="/"><button className="mybutton1" >back</button></Link>
        <div className="yeah">Successfully!</div>
        <div className="information">You've been on</div>
        <div className="details">Shuttle3 沪333333</div>
        <div className="moredetails">leaving at 8:45, 11 Dec.</div>
        <button className="button1">Leave this bus</button>
      </div>
    );
  }

  export default Scan;

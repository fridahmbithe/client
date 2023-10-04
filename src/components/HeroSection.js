import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";


function HeroSection() {
  return (
  
    <div className="hero-container">
      <div className="flex-container">
        <div className="hero-body">

          <h1>Vehicle Status Monitoring System</h1>
          <p>Do you have government owned car? </p>
          <p>Does keeping track of all the different asset look tiresome to you?</p>
          <p> Keeping Track of Government Vehicles! </p>
          <p>Effortlessly oversee and optimise government vehicles with precision.</p>
          <p>Gain real-time insights, reduce costs, and enhance efficiency like never before. </p>
          <p>Streamline trips, track fuel consumption, and ensure vehicle safety with ease. </p>

        </div>

        <div className="red-car">
        </div>
      </div>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Read More...
          </Button>

        </div>

      
        
      <div className="report-overview">
        <div className="hero-body">
          <h1> Overview</h1>

        <div id="myChart"></div>


        </div>

      </div>
     
    </div>
  );
}

export default HeroSection;

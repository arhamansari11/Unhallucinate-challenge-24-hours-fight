import React from "react";
import Navbar from "../components/Navbar";
import classes from "./about.module.css";
import firstImage from "../assets/images/sara-img.jpg";
import secondImage from "../assets/images/footer-bg.jpg";
import thirdImage from "../assets/images/appointment-bg.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="conatiner-fluid" style={{ backgroundColor: "#FDF0E6" }}>
        <div className={`container pt-5 ${classes.firstSec}`}>
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <h1>Nutritionist Introduction</h1>
              <p className="mt-3   mx-md-2">
                The Dietitian Web App is a simple yet effective tool designed to
                provide users with personalized dietary advice based on their
                health issues. This intelligent system combines state-of-the-art
                AI capabilities, including GPT-4 Vision, Assistants API, Text to
                Speech, and data-driven analysis, to revolutionize
                decision-making in the agriculture sector.
              </p>

              <h1 className="mt-5">Key Features:</h1>
              <p className="mt-3  mx-md-2">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo quae, labore assumenda excepturi possimus ipsum illo porro fugit a tempora dolore quaerat vitae iusto perferendis explicabo quisquam error qui?
              </p>
            </div>
            <div className="col-12 my-auto col-md-6 order-1 order-md-2">
              <img
                src={firstImage}
                style={{ width: "100%", height: "100%" }}
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Section of About page  */}

      <div className="conatiner-fluid">
        <div className={`container pt-5 ${classes.firstSec}`}>
          <div className="row">
            <div className="col-12 col-md-6 order-1 order-md-2">
              <h1>Intelligent Recommendations via Assistants API:</h1>
              <p className="mt-3   mx-md-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, ex dignissimos ipsum quis odio expedita praesentium earum ratione consectetur aliquid maiores rerum porro sit incidunt excepturi recusandae, eius vitae ut?
              </p>

              <h1 className="mt-5">Accessibility with Text to Speech:</h1>
              <p className="mt-3  mx-md-2">
                Implements Text to Speech technology to convert generated
                reports into spoken feedback.Ensures accessibility for patients,
                allowing them to receive information verbally, especially in
                nutritionist conditions.
              </p>
            </div>
            <div className="col-12 my-auto col-md-6 order-2 order-md-1">
              <img
                src={secondImage}
                style={{ width: "100%", height: "100%" }}
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Section of About page  */}
      <div className="conatiner-fluid">
        <div className={`container pt-5 ${classes.firstSec}`}>
          <div className="row">
            <div className="col-12 col-md-6 ">
              <h1>User-Friendly Interface:</h1>
              <p className="mt-3   mx-md-2">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, accusantium. Soluta excepturi optio nesciunt voluptates quaerat. Saepe reprehenderit maxime dignissimos aut enim doloribus voluptatibus minima, quae amet. Architecto, error labore?
              </p>

              <h1 className="mt-5">
                Real-time Updates and Web App Integration:
              </h1>
              <p className="mt-3  mx-md-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, laudantium quidem nesciunt nam consequuntur incidunt perferendis sequi minus magnam. Quam cupiditate blanditiis illum voluptates non commodi neque explicabo facilis exercitationem!
              </p>
            </div>
            <div className="col-12 my-auto col-md-6 ">
              <img
                src={thirdImage}
                style={{ width: "100%", height: "100%" }}
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Last Section  */}
      <div className={`container pt-5 ${classes.firstSec}`}>
        <h1 style={{ color: "#4D9657" }}>
          Learning Mechanism and Feedback Loop:
        </h1>
        <p>
          Incorporates a feedback mechanism where farmers can provide insights
          on the accuracy of recommendations.Adapts and learns from local
          conditions, continuously improving its predictive capabilities.
        </p>
      </div>
    </>
  );
};

export default About;

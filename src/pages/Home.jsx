import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/images/hero-bg.jpg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-class ">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-10 mt-5">
            <h1 className="text-white mt-5" style={{ fontFamily: "initial" }}>
              Nutritionist
            </h1>
            <p className="text-white mt-5">
            The Dietitian Web App is a simple yet effective tool designed to
                provide users with personalized dietary advice based on their
                health issues. This intelligent system combines state-of-the-art
                AI capabilities, including GPT-4 Vision, Assistants API, Text to
                Speech, and data-driven analysis, to revolutionize
                decision-making in the agriculture sector.
            </p>
            <Link to="/crop">
              <button className="btn-style mt-3">Let's Try</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

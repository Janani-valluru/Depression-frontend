import React from "react";
import "../styles/test.css";
import img from "C:/Users/JANANI.V.A/Desktop/mentalhealth/Health-frontend/src/assets/newimage.avif";
import Card from "./Card";
import { Tests } from "./constants/data";

const Test = () => {
  const containerStyle = {
    position: "relative",
    display: "inline-block",
    width: "1600px",
    height: "600px",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    display: "block",
  };

  const overlayTextStyle = {
    position: "absolute",
    top: "53%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#8b995f",
    textAlign: "center",
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "5px",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "3em",
    fontFamily: "Playfair Display", // Replace with your desired font family
    fontWeight: "bold", // Optional: Set font weight if needed
  };

  const paragraphStyle = {
    margin: 0,
    fontSize: "1.2em",
  };

  return (
    <div className="test-container">
      <div className="test-detail-section">
        <div className="test-center"></div>
        <div className="test-right">
          <div style={containerStyle}>
            <img src={img} alt="satest" style={imageStyle} />
            <div style={overlayTextStyle}>
              <h1 style={headingStyle}>Discover your state of mind</h1>
              <p style={paragraphStyle}></p>
            </div>
          </div>
        </div>
      </div>
      <div className="test-cards">
        {Tests.map((test) => (
          <Card
            key={test.id}
            heading={test.heading}
            description={test.description}
            img={test.img}
            link={test.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Test;

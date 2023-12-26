import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

const Card = ({ heading, description, link, img }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img className="card-img" src={img} alt="test" />
      </div>
      <div className="card-content">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-desc">{description}</p>
        <Link to={link} className="card-btn">
          Take Test
          <span>
            
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;

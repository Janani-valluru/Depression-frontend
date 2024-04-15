import React from "react";
import image1 from "../../assets/help.jpg";
import "../../styles/home.css";
import { styled, Box } from "@mui/material";
import background from "../../assets/homepagenew.png";
import { Link } from "react-router-dom";

const Image = styled(Box)`
  width: 100%;
  background: url(${background}) center/82%;
  height: 85vh;
  display: flex;
  flex-direction: row; /* This ensures that the content is on the left */
  justify-content: center;
  align-items: center;
  overflow: hidden; /* This will prevent any potential overflow */
`;

const Home = () => {
  return (
    <div style={{ marginTop: "15vh" }} className="home">
      <main>
        <Image></Image>
        <section className="mind-plan">
          <div className="mind-plan-content">
            <div className="mind-plan-info">
              <h3>Get Your Mind Plan</h3>
              <p>
                Take our carefully crafted quiz to discover your mental health
                score on things like depression, happiness scale, workplace
                stress etc; and get personalised tips and advice on what you can
                do to look after your mental health.
              </p>
              <Link to="/test">
                <button>Take the quiz</button>
              </Link>
            </div>
            <div className="mind-plan-image">
              <img src={image1} alt="Mind Plan" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

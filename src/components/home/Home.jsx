import React from "react";
import image1 from "../../assets/help.jpg";
import "../../styles/home.css";
import { styled, Box } from "@mui/material";
import background from "../../assets/homepagenew.png";
import { Link } from "react-router-dom";
import image2 from "C:/Users/JANANI.V.A/Desktop/mentalhealth/Health-frontend/src/assets/self.avif";

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
              <h3 style={{ color: "#1F316F", fontSize: "24px" }}>
                Get Your Mind Plan
              </h3>
              <p style={{ color: "#C5705D", fontSize: "20px" }}>
                Take our quiz to gently unveil whether you're riding the stress
                wave or basking in calm, see where your happiness shines, and
                get tips that feel as refreshing as a morning breeze and as
                uplifting as a sunrise.
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

        <section className="mind-plan">
          <div
            className="mind-plan-content"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="mind-plan-image" style={{ flex: "0.7" }}>
              <img
                src={image2}
                alt="Mind Plan"
                style={{ width: "100%", height: "50%" }}
              />
            </div>
            <div
              className="mind-plan-info"
              style={{
                flex: "2.5",
                paddingLeft: "20px",
                color: "#333",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
                fontWeight: "normal",
              }} // Change color and size here
            >
              <h3 style={{ color: "#1F316F", fontSize: "24px" }}>EXPLORE</h3>

              <p style={{ color: "#C5705D", fontSize: "20px" }}>
                {" "}
                Explore a treasure trove of articles that turn stress into calm,
                sleepless nights into restful ones, and nutrition into your new
                best friend.
              </p>
              <Link to="/gethelp">
                <button>Explore</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

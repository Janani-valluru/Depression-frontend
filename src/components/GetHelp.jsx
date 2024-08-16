import React, { useState, useEffect } from "react";
import "../styles/gethelp.css";
import toast from "react-hot-toast";

const ArticleCard = ({ title, image, content, link }) => (
  <div className="col-sm-12 col-md-4 mb-3">
    <div className="card mx-auto text-center box-style">
      <img src={image} alt={title} className="doctor-image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>

        <a
          href={link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#7157b7",
            borderColor: "#FFC0CB",
            color: "#FFFFFF",
          }}
        >
          Read Article
        </a>
      </div>
    </div>
  </div>
);

const DoctorCard = ({ name, specialization, contact, image }) => {
  const handleClick = () => {
    toast.success("Booked a session with the doctor");
  };
  return (
    <div className="col-sm-12 col-md-4 mb-3">
      <div className="card mx-auto text-center box-style">
        <div className="card-header" style={{ width: "100%" }}>
          <h4 className="my-0 font-weight-normal">{name}</h4>
        </div>
        <div className="card-body">
          <img src={image} alt={name} className="doctor-image" />
          <p className="card-text doctorname">{specialization}</p>
          <p className="card-text">{contact}</p>
          <button onClick={handleClick} className="btn btn-primary">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
};

const GetHelp = () => {
  return (
    <div className="page-container">
      <div className="gethelp-container ">
        <br />
        <h1 className="font-style">Articles</h1>
        <div className="row">
          <ArticleCard
            title="Understanding Mental Health"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIyPGm0EikxJ3lBymDXBDWEuBR5XMjsJztKD4y6v1ccfcb4ci-1aUushRMGt1JCU6sz0&usqp=CAU"
            link="https://www.youtube.com/watch?v=G0zJGDokyWQ"
          />
          <ArticleCard
            title="Tactics to Combact Stress"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMA2Oo2FPDBnIG34zH8T4yea2n0g_XyvAQw&s"
            link="https://www.youtube.com/watch?v=QpW387es2Y4"
          />

          <ArticleCard
            title="Break the cycle of depression"
            image="https://cdn.sanity.io/images/emne51dm/production/91b605db1184acaa52fa9d66c021f9baec646fbc-647x550.jpg"
            link="https://www.youtube.com/watch?v=Cv3bj1M96fQ"
          />

          <ArticleCard
            title="Role of Nutrition on mental health"
            image="https://img.freepik.com/premium-vector/cartoon-nutrition-with-fresh-fruit-diet-food-health-illustration_121223-1330.jpg"
            link="https://www.youtube.com/watch?v=3dqXHHCc5lA"
          />
          <ArticleCard
            title="Fix Your Sleep"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxmvCcJ6H7wYTJXcD47Zk0qAFFBD07y7iqKh-4XnBUQyFRz1xBiuqcJkZcil5lvVUseQ&usqp=CAU"
            link="https://www.youtube.com/watch?v=1Lx5dhpFJHg"
          />
          <ArticleCard
            title="Overcome Stress"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYEdELsQ-_fdMTOoY_CZgGSGFiiSvVKS1-iyuMKEJuvD0iQhtBOKHVGM_i1Mj1dgzAoiQ&usqp=CAU"
            link="https://www.youtube.com/watch?v=A0ntZkl9ouQ"
          />
        </div>

        <hr />

        {/* Doctor Cards */}
        <br />
        <h1 className="font-style">Find a Therapist</h1>
        <div className="row">
          <DoctorCard
            name="Dr.Shaun Murphy"
            specialization="Psychiatrist"
            contact="Email: shaun.murphy@gmail.com | Phone: 123-456-7890"
            reviews="Excellent therapist with a caring approach."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzl26PQkOwmLPU4nwgzlg1sTFYq5HDxuZdGg&usqp=CA"
          />
          <DoctorCard
            name="Dr.Claire Brown"
            specialization="Clinical Therapist"
            contact="Email: Claire.brown@gmailcom | Phone: 765-241-3810"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzl26PQkOwmLPU4nwgzlg1sTFYq5HDxuZdGg&usqp=CAU"
          />
          <DoctorCard
            name="Dr. Neil"
            specialization="Clinical Psychologist"
            contact="Email: Neil@gmail.com | Phone: 987-654-3210"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrziob5q8fqeGPfNXPk1URuaAeTE4Z7IXXA&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

export default GetHelp;

import React from "react";

const Recommendations = ({ predictedLevel }) => {
  const renderRecommendations = () => {
    if (predictedLevel === "Mild_level") {
      return (
        <div>
          <h2>Recommendations for Mild Depression:</h2>
          <ul>
            <li>
              Lifestyle Changes: Engage in regular exercise, maintain a healthy
              diet, prioritize sleep, manage stress, and connect with loved
              ones.
            </li>
            <li>
              Self-Help: Explore mood tracking apps, online support groups, and
              self-help books on CBT or mindfulness.
            </li>
            <li>
              Professional Support: Consider therapy (CBT) or consult your
              doctor for a comprehensive evaluation.
            </li>
          </ul>
        </div>
      );
    } else if (predictedLevel === "Moderate level") {
      return (
        <div>
          <h2>Recommendations for Moderate Depression:</h2>
          <ul>
            <li>
              Lifestyle Changes: Continue with mild depression recommendations
              and focus on setting achievable goals and managing your time
              effectively.
            </li>
            <li>
              Professional Support: Therapy with a mental health professional is
              highly recommended. Medication might be considered in consultation
              with a doctor.
            </li>
            <li>
              Additional Resources: Join support groups or reach out to mental
              health hotlines for immediate support.
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Recommendations for High Depression:</h2>
          <ul>
            <li>
              Seek immediate medical attention or contact mental health crisis
              services.
            </li>
            <li>
              Professional Evaluation: A comprehensive evaluation by a
              psychiatrist is crucial to determine appropriate treatment
              options, which may include medication, therapy, or
              hospitalization.
            </li>
            <li>
              Build a Support System: Involve family and friends for emotional
              support and explore case management services if needed.
            </li>
            <li>
              Consider Intensive Outpatient Programs (IOPs) or Electroconvulsive
              Therapy (ECT) in severe cases, under professional guidance.
            </li>
          </ul>
        </div>
      );
    }
  };

  return <div>{renderRecommendations()}</div>;
};

export default Recommendations;

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Strategy & Business Intelligence Intern</h4>
                <h5>IBM SkillsBuild – AICTE Virtual Internship (Ahmedabad)</h5>
              </div>
              <h3>Mar 2026 – Apr 2026</h3>
            </div>
            <p>
              Successfully completed a 6-week industry-focused internship on AI Strategy, Business Intelligence, and Generative AI technologies. Built and worked on AI-powered applications using tools like IBM Watsonx, IBM Granite Models, Python, Google Colab, and Relay.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IMSc in CA & IT</h4>
                <h5>Shreyarth University (Ahmedabad, Gujarat)</h5>
              </div>
              <h3>Graduated 2026</h3>
            </div>
            <p>
              Successfully completed Integrated Master of Science in Computer Applications & Information Technology (IMSc CA & IT) from Shreyarth University, Ahmedabad, Gujarat.

              Graduated in 2026 | CGPA: 6.24
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IMSc in CA & IT</h4>
                <h5>Shreyarth University (Ahmedabad, Gujarat)</h5>
              </div>
              <h3>Master's Phase
                In Progress
                2026 – Present</h3>
            </div>
            <p>
              Currently pursuing the Master's phase of the Integrated Master of Science in Computer Applications & Information Technology (IMSc CA & IT) at Shreyarth University, Ahmedabad.

              Successfully completed the undergraduate phase of the integrated program and continuing the master's phase.
              <p> Expected Completion: 2028</p>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;

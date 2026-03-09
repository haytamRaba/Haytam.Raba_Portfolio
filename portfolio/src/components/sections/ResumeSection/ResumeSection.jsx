import "./ResumeSection.css";

export default function ResumeSection() {
  return (
    <section className="resume-section">

      <h2 className="resume-title">My Resume</h2>

      <p className="resume-text">
        You can view my resume online or download it to learn more about my
        education, skills, and projects.
      </p>

      <div className="resume-buttons">

        <a
          href="/Haytam_Raba_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn view-btn"
        >
          View Resume
        </a>

        <a
          href="/Haytam_Raba_Resume.pdf"
          download
          className="resume-btn download-btn"
        >
          Download Resume
        </a>

      </div>

    </section>
  );
}
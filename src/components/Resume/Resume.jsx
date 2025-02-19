import React from "react";
import "./Resume.scss";

const Resume = () => {
  const contactInfo = [
    "james.zheng.dev217@gmail.com",
    "https://jameszhengportfolio.netlify.app",
    "github.com/jameszheng217",
  ];
  const education = [
    {
      title: "Bachelor of Software Engineering",
      duration: "2015 - 2019",
      institution: "ALGOMA University",
      description:
        "During my development, I immersed myself in hands-on projects involving modern programming languages, software development tools, and system design. This practical experience helped me build a solid technical foundation and prepared me for real-world challenges in the IT field.",
    },
  ];
  const internships = [
    {
      company: "Self-employed",
      duration: "Oct 2024 - present",
      location: "Montreal, Canada",
      responsibilities: [
        "Designed, developed, and deployed smart contracts on blockchain platforms like Ethereum, Binance Smart Chain, or Hyperledger.",
        "I have been focusing on building responsive and dynamic web pages using React.js, Html css, Next.js, Angular.js..."
      ],
    },
    {
      company: "247 Labs Inc",
      duration: "May 2022 - Sep 2024",
      location: "Toronto, Canada",
      responsibilities: [
        "Led multiple projects from concept to completion, ensuring timel delivery and alignment with client goals.",
        "Engineered a comprehensive cloud backup system featuring a multi-step sign-up process and asynchronous backend services using React.js and Next.js, resulting in a 40% increase in user engagement.",
        "Implemented both MongoDB and PostgreSQL to enhance data management efficiency, leading to a 25% improvement in data retrieval times.",
      ],
    },
    {
      company: "Many Hats",
      duration: "August 2019 - April 2022",
      location: "Burnaby, Canada",
      responsibilities: [
        "Developed innovative front-end applications, focusing on delivering exceptional user experiences while meeting business objectives.",
        "Utilized HTML, CSS, JavaScript, jQuery, React, Next.js, Angular, WordPress, and Laravel to develop dynamic and responsive web applications.",
      ],
    },
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <a
          href="/JamesZheng_CV.pdf"
          className="icon resume"
          target="_blank"
          download="James Zheng"
          aria-label="Download Resume"
        >
          <i className="bi bi-download"></i>
        </a>

        <p className="justify">
          I am an enthusiastic and dedicated IT graduate with a solid foundation
          in programming and software development. I am eager to leverage my
          skills to contribute to innovative projects and solutions. Committed
          to continuous learning and growth, I aim to apply my technical
          knowledge and problem-solving abilities in a dynamic work environment
          where I can collaborate with experienced professionals and drive
          impactful results.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>James Zheng</h4>
              <p className="justify">
              I am a Senior Full-stack developer with 6 years of rich experience in
              building scalable and high-performance web applications. Skilled in React,
              Next.js, Svelte,Vue.js, Angular, Node.js, and GraphQL. Strong expertise in
              data integration and optimized database management, maximizing data
              processing speed with MongoDB, MySQL, and PostgreSQL. Proficient in
              Python, AWS and best practices such as TDD and Agile(SCRUM).
              I am adept at building secure, scalable, and innovative blockchain
              applications across diverse ecosystems.
              </p>
              <ul>
                {contactInfo.map((contact, index) => (
                  <li key={index}>{contact}</li>
                ))}
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.title}</h4>
                <h5>{edu.duration}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p className="justify">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Work Experience</h3>
            {internships.map((internship, index) => (
              <div className="resume-item" key={index}>
                <h4>{internship.company}</h4>
                <h5>{internship.duration}</h5>
                <p>
                  <em>{internship.location}</em>
                </p>
                <ul>
                  {internship.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="justify">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectDetails.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectDetails = () => {
  React.useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const ImageSwiper = ({ images }) => (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      speed={600}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView="auto"
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
      }}
      className="portfolio-details-slider"
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );

  const imagesGroup1 = [
    {
      src: "./image/grow_1.png",
      alt: "Image 1",
    },
    // {
    //   src: "https://raw.githubusercontent.com/samarjitsahoo/auction-platform/main/assets/auction.png",
    //   alt: "Image 10",
    // },
    // {
    //   src: "https://raw.githubusercontent.com/samarjitsahoo/auction-platform/main/assets/bidders.png",
    //   alt: "Image 11",
    // },
    // {
    //   src: "https://raw.githubusercontent.com/samarjitsahoo/auction-platform/main/assets/profile.png",
    //   alt: "Image 12",
    // },
  ];

  const imagesGroup2 = [
    {
      src: "./image/crewstudio.png",
      alt: "Image 2",
    },
  ];

  const imagesGroup3 = [
    {
      src: "./image/quan2um.png",
      alt: "Image 3",
    },
  ];

  const imagesGroup4 = [
    {
      src: "./image/acceptmission1.png",
      alt: "Image 4"
    },
  ]

  const imagesGroup5 = [
    {
      src: "./image/doxy.png",
      alt: "Image 5"
    },
  ]

  const imagesGroup6 = [
    {
      src: "./image/mobility.png",
      alt: "Image 6"
    },
  ]

  const projectInfo = [
    {
      name: "Growcurriculum",
      category: "Website Project",
      webUrl: "https://growcurriculum.org",
    },
    {
      name: "Crew Studio",
      category: "Website Project",
      webUrl: "https://www.behance.net/gallery/128504717/Crewstudio-Marketing-CRM-Web-Application",
    },
    {
      name: "Market Hero",
      category: "Website Project",
      webUrl: "https://markethero.io",
    },
    {
      name: "Accept mission",
      category: "Website Project",
      webUrl: "https://acceptmission.com",
    },
    {
      name: "Doxy|Healthcare",
      category: "Website Project",
      webUrl: "https://doxy.me/en",
    },
    {
      name: "Mobilityworkout",
      category: "Website Project",
      webUrl: "https://www.mobilityworkout.com/",
    },
  ];

  const projectDescriptions = [
    {
      title: "Grow Curriculum",
      description:
        `This platform offers a variety of tools and materials aimed at enhancing ministry programs for preschool, elementary, middle, and high school students.
Skills: HTML/CSS,JavaScript,React.js,Node.js,Express.js,
         MongoDB,AWS`
    },
    {
      title: "CrewStudio",
      description:
        `This project showcases the design of a marketing Customer Relationship Management (CRM) web application named Crewstudio.
Skills: HTML5/CSS3,JavaScript,React.js,Node.js,Express.js,
        MongoDB,AWS,Figma,Adobe XD`,
    },
    {
      title: "Market Hero",
      description:
        `Market Hero is an email marketing platform that integrates advanced sales tracking and automation features to enhance business communication and revenue generation.
Skills: React.js, JavaScript, HTML5/CSS3, Node.js, Express.js, 
         MongoDB`,
    },
    {
      title: "Accept mission",
      description:
        `This platform offers a comprehensive suite of tools to facilitate innovation campaigns, manage ideas through structured funnels, and execute projects efficiently.
Skills: HTML5/CSS3,WordPress,PHP,JavaScript,MySQL,
         jQuery`,
    },
    {
      title: "Doxy|Healthcare",
      description:
        `This platform is a telemedicine platform providing secure, user-friendly video calling solutions for healthcare providers to connect with patients virtually.
Skills: React.js, Node.js, Express.js, MongoDB, Chatbot, 
         Docker, JavaScript, Python`,
    },
    {
      title: "Mobilityworkout",
      description:
        `This fully responsive site features videos and products for mobility exercises.
Skills: React, HTML5/CSS3, Redux, Wordpress, JavaScript, 
         MySQL`,
    },
  ];

  return (
    <div>
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link
              onClick={() => navigate(-1)}
              className="me-2 d-flex align-items-center"
              role="button"
            >
              <i className="bi bi-arrow-left me-1 fs-4"></i>
            </Link>
            <h1 className="mb-2 mb-lg-0">Project Details</h1>
          </div>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Project Details</li>
            </ol>
          </nav>
        </div>
      </div>
      {projectInfo.map((project, index) => {
        let selectedImageGroup;
        if (index % 6 === 0) {
          selectedImageGroup = imagesGroup1;
        } else if (index % 6 === 1) {
          selectedImageGroup = imagesGroup2;
        }else if (index % 6 === 2) {
          selectedImageGroup = imagesGroup3;
        } else if (index % 6 === 3) {
          selectedImageGroup = imagesGroup4;
        } else if (index % 6 === 4) {
          selectedImageGroup = imagesGroup5;
        } else {
          selectedImageGroup = imagesGroup6;
        }

        return (
          <section
            key={index}
            id="portfolio-details"
            className="portfolio-details section"
          >
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-8">
                  <ImageSwiper images={selectedImageGroup} />
                </div>
                <div className="col-lg-4">
                  <div
                    style={{whiteSpace: 'pre-wrap'}}
                    className="portfolio-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2>{projectDescriptions[index].title}</h2>
                    <p className="justify">
                      {projectDescriptions[index].description}
                    </p>
                  </div>
                  <div
                    className="portfolio-info"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Name</strong>: {project.name}
                      </li>
                      <li>
                        <strong>Category</strong>: {project.category}
                      </li>
                      <li>
                        <strong>Website URL</strong>:&nbsp;
                        <a
                          href={project.webUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Click here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProjectDetails;

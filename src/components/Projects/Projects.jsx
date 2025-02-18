import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "./Projects.scss";

const Portfolio = () => {
  useEffect(() => {
    let iso;
    const lightbox = GLightbox({
      selector: ".glightbox",
    });
    const initializeIsotope = () => {
      iso = new Isotope(".isotope-container", {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        filter: ".filter-web",
      });
    };
    const imgLoad = imagesLoaded(".isotope-container");
    imgLoad.on("progress", () => {
      iso && iso.layout();
    });
    imgLoad.on("done", initializeIsotope);
    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
        filters.forEach((item) => item.classList.remove("filter-active"));
        this.classList.add("filter-active");
      });
    });
    return () => {
      filters.forEach((filter) =>
        filter.removeEventListener("click", () => {})
      );
      if (iso) iso.destroy();
    };
  }, []);

  return (
    <section id="projects" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p className="justify">
          Take a look at my portfolio to see a diverse collection of projects
          that highlight my technical skills and problem-solving abilities. Each
          project reflects my commitment to innovation and my passion for
          creating effective, real-world solutions.
        </p>
      </div>
      <div className="container">
        <div
          className="isotope-layout"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="./image/Grow_1.PNG"
                  className="img-fluid"
                  alt="Project 1"
                />
                <div className="portfolio-info">
                  <h4>Project 1</h4>
                  <p>GrowCurriculum</p>
                  <a
                    href="./image/Grow_1.PNG"
                    title="Project 1"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="./image/Grow_1.PNG"
                    title="Project 1"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="./image/CrewStudio.PNG"
                  className="img-fluid"
                  alt="Project 2"
                />
                <div className="portfolio-info">
                  <h4>Project 2</h4>
                  <p>CrewStudio</p>
                  <a
                    href="./image/CrewStudio.PNG"
                    title="Project 2"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="./image/Quan2um.PNG"
                  className="img-fluid"
                  alt="Quan2um"
                />
                <div className="portfolio-info">
                  <h4>Project 3</h4>
                  <p>Market Hero</p>
                  <a
                    href="./image/Quan2um.PNG"
                    title="Project 3"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="./image/acceptmission1.PNG"
                  className="img-fluid"
                  alt="Project 4"
                />
                <div className="portfolio-info">
                  <h4>Project 4</h4>
                  <p>Acceptmission</p>
                  <a
                    href="./image/acceptmission1.PNG"
                    title="Project 4"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="./image/doxy.PNG"
                  className="img-fluid"
                  alt="Project 5"
                />
                <div className="portfolio-info">
                  <h4>Project 5</h4>
                  <p>Doxy|Healthcare</p>
                  <a
                    href="/image/doxy.PNG"
                    title="Project 5"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="./image/mobility.PNG"
                  className="img-fluid"
                  alt="Project 6"
                />
                <div className="portfolio-info">
                  <h4>Project 6</h4>
                  <p>Mobilityworkout</p>
                  <a
                    href="./image/mobility.PNG"
                    title="Project 6"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

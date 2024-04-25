import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import GitHubButton from "react-github-btn";
import { useState } from "react";
import "./ContainingPart.css";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import TechnologiesComponent from "../techonologies";
import PdfReviewer from "../pdfDisplay";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function ContainingPart({ projects }) {
  const [activeTab, setActiveTab] = useState("Work of Art");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (projects.length > 0 && projects[0].Images) {
      setIsLoading(false);
      setActiveTab(projects[0].title);
    }
  }, [projects]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    const cardBodyWidth = document.querySelector(
      ".carousel-container"
    ).offsetWidth;

    anime({
      targets: ".second",
      translateX: [
        { value: 0 },
        {
          value:
            cardBodyWidth - document.querySelector(".first").offsetWidth - 50,
        },
      ],
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
      duration: 3000,
    });

    anime({
      targets: ".first",
      translateX: [
        {
          value:
            cardBodyWidth - document.querySelector(".second").offsetWidth - 50,
        },
        { value: 0 },
      ],
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
      duration: 3000,
    });
  }, []);

  return (
    <div className="main">
      {isLoading ? (
        <Card className="card-container overflow-hidden max-h-[80vh] shadow-lg">
          <Card.Header className="card-header">
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Loading...
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <div className="carousel-container">
            <Card.Body className="overflow-auto">
              <div className="squares second"></div>
              <div className="squares first"></div>
              <div className="squares second"></div>
              <div className="squares first"></div>
              <div className="squares second"></div>
            </Card.Body>
          </div>
        </Card>
      ) : (
        <Card className="card-container overflow-hidden  shadow-lg">
          <Card.Header className="card-header">
            <Nav variant="tabs" defaultActiveKey="#first">
              {projects.map((project) => (
                <Nav.Item key={project.title}>
                  <Nav.Link
                    onClick={() => handleTabClick(project.title)}
                    active={activeTab === project.title}
                    className="nav-link"
                  >
                    {project.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Card.Header>
          <div className="carousel-container">
            {projects
              .filter((project) => project.title === activeTab)
              .map((project) => (
                <>
                  <Card.Body className="overflow-auto">
                    <SimpleBar
                      key={project.title}
                      style={{ maxHeight: "72vh" }}
                    >
                      <>
                        {project.Images && (
                          <div className="images">
                            <Carousel
                              responsive={responsive}
                              autoPlay={true}
                              autoPlaySpeed={1000000}
                              className="w-full h-128 mr-0"
                            >
                              {project.Images.map((image, index) => (
                                <div
                                  className="xl:w-3/4 w-full mx-auto h-full text-center flex items-center justify-center"
                                  key={index}
                                >
                                  <img
                                    src={image.url}
                                    alt="Gallery item"
                                    className="max-h-full max-w-full object-contain"
                                  />
                                </div>
                              ))}
                            </Carousel>
                          </div>
                        )}
                        <div className="text-3xl font-bold py-2 text-gray-800">
                          {project.title}
                        </div>
                        {project.report && (
                          <PdfReviewer fileUrl={project.report} />
                        )}
                        {project.technologies && (
                          <section className="mt-1">
                            <h2 className="text-2xl font-semibold text-gray-700">
                              Technologies Used
                            </h2>

                            <TechnologiesComponent
                              technologies={project.technologies}
                            />
                          </section>
                        )}
                        <section className="mt-1">
                          <h2 className="text-2xl font-semibold text-gray-700">
                            Inspiration
                          </h2>
                          <p className="text-gray-600 mt-1">
                            {project.inspiration}
                          </p>
                        </section>

                        <section className="mt-4">
                          <h2 className="text-2xl font-semibold text-gray-700">
                            What It Does
                          </h2>
                          <p className="text-gray-600 mt-1">
                            {project.description}
                          </p>
                        </section>

                        {project.git_link && (
                          <GitHubButton
                            href={project.git_link}
                            data-color-scheme="no-preference: light; light: light; dark: dark_high_contrast;"
                            data-size="large"
                            aria-label={`Star ${project.title} on GitHub`}
                            style={{ width: "100%", height: "100%" }}
                          >
                            Repository
                          </GitHubButton>
                        )}
                      </>
                    </SimpleBar>
                  </Card.Body>
                </>
              ))}
          </div>
        </Card>
      )}
    </div>
  );
}

ContainingPart.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      git_link: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["computer", "electronics"]),
      Images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          id: PropTypes.number,
          project_id: PropTypes.number,
          description: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
};

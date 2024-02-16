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

export default function ContainingPart({ projects }) {
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
  const [activeTab, setActiveTab] = useState("Work of Art");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    if (projects.length > 0) {
      setIsLoading(false);
      setActiveTab(projects[0].title);
    }
    return () => clearTimeout(timer);
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
        <Card className="card-container">
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
            <Card.Body>
              <div className="squares second"></div>
              <div className="squares first"></div>
              <div className="squares second"></div>
              <div className="squares first"></div>
              <div className="squares second"></div>
            </Card.Body>
          </div>
        </Card>
      ) : (
        <Card className="card-container">
          <Card.Header className="card-header">
            <Nav variant="tabs" defaultActiveKey="#first">
              {projects.map((project) => (
                <div key={project.title}>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => handleTabClick(project.title)}
                      active={activeTab === project.title}
                      className="nav-link"
                    >
                      {project.title}
                    </Nav.Link>
                  </Nav.Item>
                </div>
              ))}
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Work of Art
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          {projects.map((project) => (
            <div key={project.title} className="carousel-container">
              <Card.Body>
                {activeTab === project.title && (
                  <>
                    {project.Images && (
                      <div className="images">
                        <Carousel
                          responsive={responsive}
                          autoPlay={true}
                          autoPlaySpeed={3000}
                          infinite={true}
                          keyBoardControl={true}
                          customTransition="all .5"
                          transitionDuration={500}
                        >
                          {project.Images.map((image, index) => (
                            <div className="gallery-item" key={index}>
                              <img src={image.url} alt="Picture" />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    )}
                    <Card.Title>{project.title}</Card.Title>
                    <div className="card-text">
                      <Card.Text>{project.description}</Card.Text>
                    </div>
                    {project.git_link && (
                      <GitHubButton
                        href={project.git_link}
                        data-color-scheme="no-preference: light; light: light; dark: dark_high_contrast;"
                        data-size="large"
                        aria-label={"Star ${project.title} on GitHub"}
                      >
                        Star
                      </GitHubButton>
                    )}
                  </>
                )}
              </Card.Body>
            </div>
          ))}
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

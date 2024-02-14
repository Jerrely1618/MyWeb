import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import GitHubButton from "react-github-btn";
import { useState } from "react";
import "./ContainingPart.css";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  const [activeTab, setActiveTab] = useState("MyStudy");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="main">
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

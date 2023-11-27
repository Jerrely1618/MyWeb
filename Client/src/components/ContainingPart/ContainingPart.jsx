import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import GitHubButton from "react-github-btn";
import { useState } from "react";
import "./ContainingPart.css";
import PropTypes from "prop-types";
import { Carousel } from "antd";

export default function ContainingPart({ projects }) {
  const [activeTab, setActiveTab] = useState("MyStudy");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
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
        <div key={project.title}>
          <Card.Body>
            {activeTab === project.title && (
              <>
                {project.pictures && (
                  <Carousel dotPosition="left">
                    {project.pictures.map((picture, index) => (
                      <img
                        key={index}
                        src={picture}
                        alt={`Project ${project.title} Image`}
                      />
                    ))}
                  </Carousel>
                )}
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
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
  );
}

ContainingPart.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
      git_link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

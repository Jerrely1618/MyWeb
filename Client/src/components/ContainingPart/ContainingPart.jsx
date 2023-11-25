import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import GitHubButton from "react-github-btn";
import { useState } from "react";
import "./ContainingPart.css";
import PropTypes from "prop-types";

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

      <Card.Body>
        {projects.map((project) => (
          <div key={project.title}>
            {activeTab === project.title && (
              <>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <GitHubButton
                  href={project.git_link}
                  data-color-scheme="no-preference: light; light: light; dark: dark_high_contrast;"
                  data-size="large"
                  aria-label={"Star ${project.title} on GitHub"}
                >
                  Star
                </GitHubButton>
              </>
            )}
          </div>
        ))}
      </Card.Body>
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

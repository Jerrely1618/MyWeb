import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import GitHubButton from "react-github-btn";
import { useState } from "react";

export default function ContainingPart() {
  const [activeTab, setActiveTab] = useState("MyStudy");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <Card
      style={{
        margin: "100px",
        height: "70%",
      }}
    >
      <Card.Header style={{ width: "100%", height: "100%" }}>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link
              onClick={() => handleTabClick("MyStudy")}
              active={activeTab === "MyStudy"}
              style={{ fontWeight: "bold" }}
            >
              MyStudy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleTabClick("HealthJourney")}
              active={activeTab === "HealthJourney"}
              style={{ fontWeight: "bold" }}
            >
              Health Journey
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Work of Art
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        {activeTab === "MyStudy" && (
          <>
            <Card.Title>MyStudy</Card.Title>
            <Card.Text>
              We were inspired to address the problem of education inequality.
              It's an issue that is not restricted to one specific area, it is
              something each of us have all personally witnessed the glaring
              disparities in educational access and quality. We wanted to
              attempt to bridge this gap, to make it so that students from all
              around the world would be able to reach their full potential.
            </Card.Text>
            <GitHubButton
              href="https://github.com/lemueldls/mybook.study"
              data-color-scheme="no-preference: light; light: light; dark: dark_high_contrast;"
              data-size="large"
              aria-label="Star lemueldls/mybook.study on GitHub"
            >
              Star
            </GitHubButton>
          </>
        )}

        {activeTab === "HealthJourney" && (
          <>
            <Card.Title>Health Journey</Card.Title>
            <Card.Text>
              Recognizing the considerable population of elderly individuals
              relying on NJ Transit, many of whom may not have a strong
              familiarity with modern technology, it became evident that there
              was a pressing need to provide them with swift and seamless access
              to essential healthcare facilities.
            </Card.Text>
            <GitHubButton
              href="https://github.com/JawadChy/HackRU-23"
              data-color-scheme="no-preference: light; light: light; dark: dark_high_contrast;"
              data-size="large"
              aria-label="Star JawadChy/HackRU-23 on GitHub"
            >
              Star
            </GitHubButton>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

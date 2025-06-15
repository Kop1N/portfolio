import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg4 from "../assets/img/project-image2.2.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Frontier Inventory Systems",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Hand Gesture Controlled Robot using Arduino Nano",
      description: "Electrical & Programming",
      imgUrl: projImg2,
    },
    {
      title: "E-CON: Smart Occupancy-Driven Energy Conservation",
      description: "Design, Documentation & Development",
      imgUrl: projImg5,
    },
    {
      title: "Frontier Inventory Systems",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Hand Gesture Controlled Robot using Arduino Nano",
      description: "Electrical & Programming",
      imgUrl: projImg4,
    },
    {
      title: "E-CON: Smart Occupancy-Driven Energy Conservation",
      description: "Design, Documentation & Development",
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a Computer Engineering graduate, I’ve built several innovative projects that bridge hardware and software. These include E-CON, a smart automation system for analog air conditioners using sensors and IoT; a gesture-controlled robot that responds to hand movements for intuitive control; and a web-based inventory management system with barcode scanning and real-time data tracking. Each project reflects my passion for practical, efficient tech solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">School Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Self Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Work Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I’m currently working on a new project, which is still under development and will be added to this section soon. Stay tuned—this upcoming work continues my focus on combining intelligent systems with practical, real-world applications. Check back later for updates!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>If given the opportunity to work with you, it would be an honor to showcase the projects we build together here. I am excited to collaborate, contribute my skills, and create meaningful solutions that I can proudly display as part of my growing portfolio.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

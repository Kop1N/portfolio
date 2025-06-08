import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/cpex.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Cybersecurity Specialist", "Network Technician" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Here's my quick introduction:</span>
                <h1>{`Hi! I'm John Carlo Mutuc`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Cybersecurity Specialist", "Network Technician" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I’m a curious and driven Computer Engineering graduate from the Technological Institute of the Philippines (T.I.P.) who’s always been fascinated by how things work from circuits and code to systems and strategy. As someone who grew up playing games, I naturally developed a love for technology, problem-solving, and creative design. That same curiosity now fuels my passion for cybersecurity, web development, and networking.

I enjoy solving complex problems whether it’s debugging a stubborn piece of code, optimizing a network setup, or building a system that improves someone’s everyday life. I believe that tech isn’t just about innovation; it’s about creating change, making things better, and empowering people through smart, secure, and scalable solutions.

Beyond the classroom, I self-studied full-stack web development, earned Cisco certifications in networking, and explored the world of ethical hacking and secure system design. I thrive in environments where I can learn, build, and contribute something meaningful especially if it means making a real difference.</p>
                  <button onClick={() => console.log('connect')}>Connect with me! <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

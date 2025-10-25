import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import StackImg from '../Image/StackImg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <div className="project-wrapper">
          <Title title="MY PROFESSIONAL STORY" />
          <Row>
            <Col sm={12}>
              <>
                <div className="project-wrapper__image">
                  <ul aria-label="Project Link" className="skill">
                    {skills.map((skill) => {
                      const { title, time, role, desc, img, id } = skill;
                      return (
                        <li className="skill-item" key={id}>
                          <div className="img-container">
                            <StackImg alt={title} slug={img} />
                          </div>
                          <div className="content-container">
                            <h4>{time}</h4>
                            <h4>{role}</h4>
                            <div>
                              <p>{desc}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                    <li className="skill-item">
                      <div className="img-container last">
                        <h2>Be part of my Journey</h2>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;

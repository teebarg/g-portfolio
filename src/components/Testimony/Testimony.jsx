import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import StackImg from '../Image/StackImg';

const Testimony = () => {
  const { testimonies } = useContext(PortfolioContext);

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
    <section id="testimonies">
      <Container>
        <div className="testimony-wrapper">
          <Title title="TESTIMONIALS" />
          <Row>
            <Col sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="testimony-container">
                  {testimonies.map((testimony) => (
                    <div className="testimony">
                      <div className="img-container">
                        <StackImg alt="profile picture" slug={testimony.img} />
                      </div>
                      <div>
                        <h1>{testimony.name}</h1>
                        <p>{testimony.role}</p>
                        <p className="comment">{testimony.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Testimony;

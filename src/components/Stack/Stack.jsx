import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import StackImg from '../Image/StackImg';

const Stack = () => {
  const { stacks } = useContext(PortfolioContext);

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
    <section id="stacks">
      <Container>
        <div className="stack-wrapper">
          <Title title="MY STACKS" />
          <Row>
            <Col sm={12}>
              <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="stack-wrapper__image">
                  {stacks.map((stack) => {
                    const { name, img, id } = stack;

                    return (
                      <div className="stack-cont__image" key={id}>
                        <StackImg alt={name} slug={img} />
                      </div>
                    );
                  })}
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Stack;

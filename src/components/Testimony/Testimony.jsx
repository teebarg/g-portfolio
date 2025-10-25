import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import StackImg from '../Image/StackImg';

const Testimony = () => {
  const { testimonies } = useContext(PortfolioContext);

  return (
    <section id="testimonies">
      <Container>
        <div className="testimony-wrapper">
          <Title title="TESTIMONIALS" />
          <Row>
            <Col sm={12}>
              <>
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
              </>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Testimony;

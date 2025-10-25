import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import StackImg from '../Image/StackImg';

const Stack = () => {
  const { stacks } = useContext(PortfolioContext);

  return (
    <section id="stacks">
      <Container>
        <div className="stack-wrapper">
          <Title title="MY STACKS" />
          <Row>
            <Col sm={12}>
              <>
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
              </>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Stack;

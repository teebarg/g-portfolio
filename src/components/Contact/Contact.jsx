import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/Container';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">Would you like to work with me? Awesome!</p>
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label htmlFor="name">
                  Your Name: <input type="text" name="name" className="form-ctl" />
                </label>
              </p>
              <p>
                <label htmlFor="email">
                  Your Email: <input type="email" name="email" className="form-ctl" />
                </label>
              </p>
              <p>
                <label htmlFor="message">
                  Message: <textarea name="message" className="form-ctl" />
                </label>
              </p>
              <button type="submit" rel="noopener noreferrer" className="cta-btn cta-btn--resume">
                Submit
              </button>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;

import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import AboutImg from "../Image/AboutImg";
import IconImg from "../Image/IconImg";
import PortfolioContext from "../../context/context";

const About = () => {
    const { about } = useContext(PortfolioContext);
    const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

    return (
        <section id="about">
            <Container>
                <Title title="About Me" />
                <Row className="about-wrapper">
                    <Col md={6} sm={12}>
                        <>
                            <div className="about-wrapper__image">
                                <AboutImg alt="profile picture" filename={img} />
                                <div style={{ marginTop: 10 }} className="about-wrapper__image-contact">
                                    <IconImg alt="Phone" slug="phone.png" />
                                    <p>08067295227</p>
                                </div>
                                <div style={{ marginTop: 10 }} className="about-wrapper__image-contact">
                                    <IconImg alt="Mail" slug="mail.png" />
                                    <p>neyostica2000@yahoo.com</p>
                                </div>
                            </div>
                        </>
                    </Col>
                    <Col md={6} sm={12}>
                        <>
                            <div className="about-wrapper__info">
                                <p className="about-wrapper__info-text">{paragraphOne}</p>
                                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                                <p className="about-wrapper__info-text">{paragraphThree}</p>
                                <span className="d-flex mt-3">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cta-btn cta-btn--resume"
                                        href="https://client.andela.com/talent/profile/3d0b245b-f721-45ff-999d-deb4dbe74c8e"
                                    >
                                        View My Profile
                                    </a>
                                </span>
                                {resume && (
                                    <span className="d-flex mt-3">
                                        <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--resume" href={resume}>
                                            Resume
                                        </a>
                                    </span>
                                )}
                                <span className="d-flex mt-3">
                                    <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--resume" href="https://blog.niyi.com.ng/">
                                        Learn with Insights
                                    </a>
                                </span>
                            </div>
                        </>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;

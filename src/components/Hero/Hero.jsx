import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <section id="hero" className="jumbotron">
            <Container>
                <>
                    <h1 className="hero-title">
                        <span className="text-color-main">Adeniyi Aderounmu</span>
                        <br />
                        <span className="text-color-main">I&apos;m a Software Engineer</span>
                    </h1>
                </>
                <>
                    <p className="hero-cta">
                        <span className="cta-btn cta-btn--hero">
                            <Link to="about" smooth duration={1000}>
                                Know more
                            </Link>
                        </span>
                    </p>
                </>
            </Container>
        </section>
    );
};

export default Header;

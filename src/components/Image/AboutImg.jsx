import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const AboutImg = ({ filename, alt }) => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(filter: { extension: { regex: "/(jpg|jpeg|png|webp|avif)/" } }) {
                nodes {
                    base
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            width: 300
                            placeholder: DOMINANT_COLOR
                            breakpoints: [150, 200, 300, 400]
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    `);

    const imageNode = data.images.nodes.find((img) => img.base.toLowerCase() === filename.toLowerCase());

    if (!imageNode || !imageNode.childImageSharp) {
        console.warn(`⚠️ AboutImg: Image not found → ${filename}`);
        return null;
    }

    const image = getImage(imageNode);

    return <GatsbyImage className="abt-img shadow-lg" alt={alt || filename} image={image} />;
};

AboutImg.propTypes = {
    filename: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default AboutImg;

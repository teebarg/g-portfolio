import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const ProjectImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { extension: { regex: "/(jpg|jpeg|png|webp|avif)/" } }) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 1920
              placeholder: DOMINANT_COLOR
              breakpoints: [640, 768, 1024, 1366, 1920]
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const imageNode = data.images.nodes.find(
    (img) => img.base.toLowerCase() === filename.toLowerCase()
  );

  if (!imageNode || !imageNode.childImageSharp) {
    console.warn(`⚠️ Image not found: ${filename}`);
    return null;
  }

  const image = getImage(imageNode);

  return <GatsbyImage alt={alt || filename} image={image} />;
};

ProjectImg.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ProjectImg;

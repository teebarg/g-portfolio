import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const IconImg = ({ slug, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fixed(width: 30) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.allImageSharp.edges.find((edge) => edge.node.fixed.originalName === slug);
      if (!image) {
        return null;
      }
      return <Img fixed={image.node.fixed} alt={alt} />;
    }}
  />
);

IconImg.propTypes = {
  slug: PropTypes.string,
  alt: PropTypes.string,
};

export default IconImg;

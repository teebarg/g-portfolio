import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StackImg = ({ slug, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(fit: CONTAIN) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.allImageSharp.edges.find((edge) => edge.node.fluid.originalName === slug);
      if (!image) {
        return null;
      }
      return <Img fluid={image.node.fluid} alt={alt} />;
    }}
  />
);

StackImg.propTypes = {
  slug: PropTypes.string,
  alt: PropTypes.string,
};

export default StackImg;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Svg = styled.svg`
  width: 1rem;
  height: 1rem;
  margin-bottom: -0.25em;
  padding: 1rem;

  font-size: 0;
  line-height: 0;
`;

const Logo = props => {

  if (props.to) {
    return (
    <Link to={props.to}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 40">
        <path
          fill={props.fill}
          d="M26,40c-5,0,-10-5-10-10H0V0h36v30C36,36,32,40,26,40z"
        />
      </Svg>
    </Link>);
  }

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 40">
      <path
        fill={props.fill}
        d="M26,40c-5,0,-10-5-10-10H0V0h36v30C36,36,32,40,26,40z"
      />
    </Svg>
  );
};

Logo.propTypes = {
  fill: PropTypes.string,
  to: PropTypes.string
};

Logo.defaultProps = {
  fill: '#333',
  to: PropTypes.string
};

export default Logo;

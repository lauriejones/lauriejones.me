import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 1rem;
  height: 1rem;
  margin-bottom: -.25em;
  padding: 1rem;

  font-size: 0;
  line-height: 0;
`;

const Logo = props => {
  const { size, fill } = props;
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 40">
      <path
        fill={fill}
        d='M26,40c-5,0,-10-5-10-10H0V0h36v30C36,36,32,40,26,40z'
      />
    </Svg>
  );
  }

Logo.propTypes = {
  size: PropTypes.string
}

Logo.defaultProps = {
  size: 'medium'
}

export default Logo;

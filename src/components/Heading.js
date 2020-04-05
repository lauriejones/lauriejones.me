import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const h1 = () => css`
  font-size: ${props => props.theme.typeScale[1]};
  font-weight: 400;
  /* line-height: ${props => props.theme.lineHeight.title}; */
`;

const h2 = () => css`
  font-size: ${props => props.theme.typeScale[2]};
  font-weight: 400;
`;

const h3 = () => css`
  font-size: ${props => props.theme.typeScale[3]};
  font-weight: 400;
`;

const h4 = () => css`
  font-size: ${props => props.theme.typeScale[4]};
  font-weight: 400;
`;

const h5 = () => css`
  font-size: ${props => props.theme.typeScale[5]};
  font-weight: 400;
`;

const h6 = () => css`
  font-size: ${props => props.theme.typeScale[7]};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.tracking.caps};
`;

export const BaseHeadingComponent = props => {
  const { size, component, ...otherProps } = props;
  let Component = component;

  if (!Component) {
    Component = `h${size}`;
  }

  return <Component {...otherProps} />;
};

const Heading = styled(BaseHeadingComponent)`
  max-width: 24em;
  font-family: ${props => props.theme.copy.fontFamily};
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  margin: 0;
  line-height: 1.25;
  ${({ size }) => size === 1 && h1()}
  ${({ size }) => size === 2 && h2()}
  ${({ size }) => size === 3 && h3()}
  ${({ size }) => size === 4 && h4()}
  ${({ size }) => size === 5 && h5()}
  ${({ size }) => size === 6 && h6()}
`;

Heading.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
};

Heading.displayName = 'Heading';

export default Heading;

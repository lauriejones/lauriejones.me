import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { py, px } from 'styled-components-spacing';
import { Link as GatsbyLink } from 'gatsby';

import { colors } from './theme';

const Button = styled.button`
  display: inline-block;
  ${py(3)};
  ${px(4)};
  background-color: ${props => props.theme.link.color};
  /* background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red); */
  
  /* background-color: ${props => props.theme.colors.black87}; */
  color: white;
  /* border: .0625rem solid currentColor; */
  /* color: ${props => props.theme.colors.black87}; */
  font-family: ${({ theme }) =>
    (theme.copy && theme.copy.fontFamily) || 'sans-serif'};
  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;

  &:focus,
  &:hover {
    background-color: ${props => props.theme.link.focus};
    color: ${props => props.theme.colors.darkBlue};
  }
`;

const SmartButton = props => {
  if (props.to) {
    return <Button as={GatsbyLink} {...props} />;
  }
  if (props.href) {
    return <Button as="a" {...props} />;
  }
  return <Button {...props} />;
};

Button.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  color: colors.blue,
  size: 'medium',
};

export default SmartButton;

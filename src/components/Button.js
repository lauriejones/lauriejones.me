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

  background: linear-gradient(to bottom, #f2f2f2, #ddd);
  
  /* background-color: ${props => props.theme.colors.black87}; */
  /* color: white; */
  box-shadow: 
    inset 0 0 0 .0625rem ${props => props.theme.colors.black06}, 
    0 1px 4px 0 rgba(0, 0, 0, .1), 
    0 2px 8px 0 rgba(0, 0, 0, .05)
  ;
  /* border: .0625rem solid ${props => props.theme.colors.black06}; */
  color: ${props => props.theme.colors.black87};
  font-family: ${({ theme }) =>
    (theme.copy && theme.copy.fontFamily) || 'sans-serif'};
  font-weight: 500;
  text-decoration: none;
  border-radius: .5rem;

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

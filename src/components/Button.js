import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { py, px } from 'styled-components-spacing';
import { Link as GatsbyLink } from 'gatsby';

import { colors } from './theme';

const Button = styled.button`
  display: inline-block;
  ${py(2)};
  ${px(3)};
  background-color: ${props => props.theme.link.color};
  background-color: ${props => props.theme.colors.blue};
  /* background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red); */

  /* background: ${props =>
    `linear-gradient(to bottom, ${props.theme.colors.blue}, ${props.theme.colors.darkBlue})`}; */
  
  color: ${props => props.theme.colors.black87};
  color: white;
  box-shadow: 
    inset 0 0 0 .0625rem hsla(217, 62%, 16%, .1), 
    0 20px 25px -5px rgba(0, 0, 0, 0.1), 
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  ;
  /* border: .0625rem solid ${props => props.theme.colors.black06}; */
  /* color: ${props => props.theme.colors.black87}; */
  /* color: ${props => props.theme.colors.darkBlue}; */
  font-family: ${({ theme }) =>
    (theme.copy && theme.copy.fontFamily) || 'sans-serif'};
    font-size: ${({ theme }) => theme.typeScale[6]};
  font-weight: 500;
  text-decoration: none;
  border-radius: .125rem;
  transition: all .2s ease-in-out;

  &:focus,
  &:hover {
    /* background-color: ${props => props.theme.colors.darkBlue}; */
    /* color: ${props => props.theme.link.focus}; */
    transform: translateY(-1px);
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

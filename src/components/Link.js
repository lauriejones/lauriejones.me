import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import { colors } from './theme';

const Link = styled.a`
  display: inline-block;
  color: ${props => (props.muted ? 'currentColor' : props.theme.link.color)};
  font-family: ${({ theme }) =>
    (theme.copy && theme.copy.fontFamily) || 'sans-serif'};
  text-decoration-skip: ink;

  &:focus,
  &:hover {
    /* background-color: ${props => props.theme.link.focus}; */
    /* color: ${props => props.theme.colors.black87}; */
    text-decoration: none;
  }
`;

const SmartLink = props => {
  if (props.to) {
    return <Link as={GatsbyLink} {...props} />;
  }
  return <Link {...props} />;
};

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Link.defaultProps = {
  color: colors.blue,
  size: 'medium',
};

export default SmartLink;

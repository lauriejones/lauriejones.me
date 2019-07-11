import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {colors} from '../Theme';

const BaseLink = props => {
  const {
    component: Component, 
    size, color, muted, //eslint-disable-line no-unused-vars
    ...otherProps
  } = props;
  return <Component {...otherProps}/>;
}

BaseLink.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

BaseLink.defaultProps = {
  component: 'a'
};

const Link = styled(BaseLink)`
  margin: 0;
  color: ${props => props.muted ? 'currentColor' : props.theme.link.color};
  font-family: ${({theme}) => theme.copy && theme.copy.fontFamily || 'sans-serif'};
  text-decoration-skip: ink;

  &:focus {
    background-color: ${props => props.theme.link.focus};
    color: ${props => props.theme.colors.darkBlue};
  }

  &:hover {
    background-color: ${props => props.theme.link.focus};
    color: ${props => props.theme.colors.darkBlue};
  }
`;

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Link.defaultProps = {
  color: colors.blue,
  size: 'medium'
};

export default Link;

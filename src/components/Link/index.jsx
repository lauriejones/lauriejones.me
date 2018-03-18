import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {colors} from '../Theme';

const BaseLink = props => {
  const {
    component: Component, 
    size, color, //eslint-disable-line no-unused-vars
    ...otherProps
  } = props;
  return <Component {...otherProps}/>;
}

BaseLink.propTypes = {
  component: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func])
};

BaseLink.defaultProps = {
  component: 'a'
};

const Link = styled(BaseLink)`
  margin: 0;
  color: ${({color}) => color || 'currentColor'};
  font-family: ${({theme}) => theme.copy && theme.copy.fontFamily || 'sans-serif'};
  line-height: ${({theme}) => theme.copy && theme.copy.lineHeight};

  &:focus {
    background-color: ${props => props.theme.link.focus};
    color: ${props => props.theme.colors.darkGrey};
  }

  &:hover {
    background-color: ${props => props.theme.link.focus};
    color: ${props => props.theme.colors.darkGrey};
  }
`;

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Link.defaultProps = {
  color: colors.green,
  size: 'medium'
};

export default Link;

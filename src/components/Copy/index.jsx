import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseCopy = props => {
  const {
    component: Component,
    measure, size, align, color, //eslint-disable-line no-unused-vars
    ...otherProps} = props;
  return (<Component {...otherProps}/>);
};

BaseCopy.propTypes = {
  component: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func])
};

BaseCopy.defaultProps = {
  component: 'p'
};

const Copy = styled(BaseCopy)`
  margin: 0;
  color: ${({color}) => color || 'currentColor'};
  font-family: ${({theme}) => theme.copy && theme.copy.fontFamily || 'sans-serif'};
  line-height: ${({theme}) => theme.copy && theme.copy.lineHeight};

  ${({measure}) => {
    if (measure) {
      return 'max-width: 32em;';
    }
  }}

  ${({align, measure}) => {
    if (measure) {
      if (align === 'center') {
        return `
          text-align: ${align};
          margin-left: auto;
          margin-right: auto;
        `;
      }
      if (align === 'right') {
        return `
          text-align: ${align};
          margin-left: auto;
        `;
      }
      if (align === 'left') {
        return `
          text-align: ${align};
        `;
      }
    } else if (align) {
      return `text-align: ${align};`;
    }
  }}
  
  ${({size}) => {
    if (size === 'small') {
      return `
        font-size: .75rem;
      `;
    }
    if (size === 'large') {
      return `
        font-size: 1.25rem;
        line-height: 1.25;
      `;
    }
    if (size === 'medium') {
      return `
        font-size: 1rem;
      `;
    }
  }}
`;

Copy.propTypes = {
  measure: PropTypes.bool.isRequired,
  color: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Copy.defaultProps = {
  measure: true,
  align: 'left',
  size: 'medium'
};

export default Copy;
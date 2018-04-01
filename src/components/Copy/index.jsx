import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseCopy = props => {
  const {
    component: Component,
    measure, size, align, color, lineHeight, //eslint-disable-line no-unused-vars
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
  /* line-height: ${({theme}) => theme.copy && theme.copy.lineHeight}; */

  ${({measure}) => {
    if (measure) {
      return 'max-width: 24em;';
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
  
  ${({size, theme}) => {
    if (size === 'small') {
      return `
        font-size: ${theme.typeScale[8]};
      `;
    }
    if (size === 'large') {
      return `
        font-size: ${theme.typeScale[5]};
      `;
    }
    if (size === 'medium') {
      return `
        font-size: ${theme.typeScale[7]};
      `;
    }
  }}
  
  ${({lineHeight, theme}) => {
    if (lineHeight === 'solid') {
      return `
        line-height: ${theme.lineHeights.solid};
      `;
    }
    if (lineHeight === 'copy') {
      return `
        line-height: ${theme.lineHeights.copy};
      `;
    }
    if (lineHeight === 'title') {
      return `
        line-height: ${theme.lineHeights.title};
      `;
    }
  }}
`;

Copy.propTypes = {
  measure: PropTypes.bool.isRequired,
  color: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  lineHeight: PropTypes.oneOf(['solid', 'title', 'copy'])
};

Copy.defaultProps = {
  measure: true,
  align: 'left',
  size: 'medium',
  lineHeight: 'copy'
};

export default Copy;
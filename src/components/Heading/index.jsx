import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const h1 = () => css`
  font-size: ${props => props.theme.typeScale[3]};
  line-height: ${props => props.theme.lineHeight.title}
`;

const h2 = () => css`
  font-size: ${props => props.theme.typeScale[4]};
`;

const h3 = () => css`
  font-size: ${props => props.theme.typeScale[5]};
`;

const h4 = () => css`
  font-size: ${props => props.theme.typeScale[6]};
`;

const h5 = () => css`
  font-size: ${props => props.theme.typeScale[7]};
`;

const h6 = () => css`
  font-size: ${props => props.theme.typeScale[8]};
`;

export const BaseHeadingComponent = props => {
  const {size, component, ...otherProps} = props;
  let Component = component;

  if (!Component) {
    Component = `h${size}`;
  }

  return (<Component {...otherProps}/>);
};

const Heading = styled(BaseHeadingComponent)`
  font-family: ${props => props.theme.copy.fontFamily};
  margin: 0;
  line-height: 1;
  ${({size}) => size === 1 && h1()}
  ${({size}) => size === 2 && h2()}
  ${({size}) => size === 3 && h3()}
  ${({size}) => size === 4 && h4()}
  ${({size}) => size === 5 && h5()}
  ${({size}) => size === 6 && h6()}
`;

Heading.propTypes = {
  size: React.PropTypes.number.isRequired,
  color: React.PropTypes.string,
  children: React.PropTypes.node
};

Heading.displayName = 'Heading';

export default Heading;

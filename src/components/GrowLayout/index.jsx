import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
OuterWrapper.displayName = 'OuterWrapper';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
InnerWrapper.displayName = 'InnerWrapper';

const Content = styled.div`
  flex: 1 0 auto;
  ${({flex}) => flex && `
    display: flex;
  `}
`;
Content.displayName = 'Content';

Content.propTypes = {
  flex: PropTypes.bool
};

Content.defaultProps = {
  flex: false
};

const Wrapper = ({children, ...otherProps}) => (
  <OuterWrapper {...otherProps}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node
};

const GrowLayout = {
  Wrapper,
  Content
};

GrowLayout.displayName = 'GrowLayout';

export default GrowLayout;
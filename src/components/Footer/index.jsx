import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Padding} from 'styled-components-spacing';
import Container from '../Container';
import Copy from '../Copy';
import Link from '../Link';
import Logo from '../Logo';

const FooterWrapper = styled.footer`
  grid-column: 1 / span 2;
  grid-row: 3 / span 1;

  ${breakpoint('md')`
    grid-column: 2 / span 1;
  `}

  /* background-color: #ddd; */
  /* background-color: ${props => props.theme.colors.darkGrey}; */
  color: #666;
`;

const Footer = () => (
  <FooterWrapper>
    {/* <Padding all={3} horizontal={{sm: 4, xl: 5}}>
      <Copy size="small" lineHeight="solid" align="center" color={props => props.theme.colors.white54}>
        Made with <Link href="#" muted>Gatsby</Link> &amp; <Link href="#" muted>Styled Components</Link>.
      </Copy>
    </Padding> */}
  </FooterWrapper>
);

export default Footer;

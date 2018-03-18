import React from 'react';
import styled from 'styled-components';
import {Padding} from 'styled-components-spacing';
import Container from '../Container';
import Copy from '../Copy';
import Link from '../Link';
import Logo from '../Logo';
import {rainbowBg} from '../../utils';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.midGrey};
`;

const Footer = () => (
  <FooterWrapper>
    <Padding all={3}>
      <Container>
        <Copy size="small">
          Made with thanks to <Link href="#" color={props => props.theme.colors.midGrey}>Gatsby</Link> &amp; <Link href="#" color={props => props.theme.colors.midGrey}>Styled Components</Link>.
        </Copy>
      </Container>
    </Padding>
  </FooterWrapper>
);

export default Footer;

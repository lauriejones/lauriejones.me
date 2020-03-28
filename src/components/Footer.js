import React from 'react';
import styled from 'styled-components';
import { Padding } from 'styled-components-spacing';
import Link from './Link';
import Copy from './Copy';

const FooterWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 1;
  font-size: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Padding all={3}>
        <Copy
          size="small"
          lineHeight="solid"
          color={props => props.theme.colors.black87}
        >
          <Link muted href="https://twitter.com/laurie_jones">
            Twitter
          </Link>
          <span> &middot; </span>
          <Link muted href="https://github.com/lauriejones">
            GitHub
          </Link>
          <span> &middot; </span>
          <Link muted href="https://www.npmjs.com/~lauriejones">
            npm
          </Link>
          <span> &middot; </span>
          <Link muted href="https://au.linkedin.com/in/lauriejonesme">
            Linked In
          </Link>
        </Copy>
      </Padding>
      <Padding all={3}>
        <Copy
          size="small"
          lineHeight="solid"
          color={props => props.theme.colors.black87}
        >
          &copy; {currentYear} Laurie Jones
        </Copy>
      </Padding>
    </FooterWrapper>
  );
};

export default Footer;

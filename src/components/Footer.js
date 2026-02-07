import React from 'react';
import styled from 'styled-components';
import { Padding } from 'styled-components-spacing';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';

const FooterWrapper = styled.footer`
  /* display: flex; */
  justify-content: space-between;
  /* border-top: 1px solid rgba(0, 0, 0, 0.1); */

  background-color: rgba(0, 0, 0, 0.02);
  line-height: 1;
  font-size: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Grid halign="justify">
        <Grid.Unit size="min">
          <Padding all={3}>
            <Text
              size="small"
              lineHeight="solid"
              color={props => props.theme.colors.black87}
            >
              <Link muted href="https://bsky.app/profile/lauriejones.bsky.social">
                Bluesky
              </Link>
              <span> &middot; </span>
              <Link muted href="https://github.com/lauriejones">
                GitHub
              </Link>
              <span> &middot; </span>
              <Link muted href="https://au.linkedin.com/in/lauriejonesme">
                Linked In
              </Link>
            </Text>
          </Padding>
        </Grid.Unit>
        <Grid.Unit size="min">
          <Padding all={3}>
            <Text
              size="small"
              lineHeight="solid"
              color={props => props.theme.colors.black87}
            >
              <Link muted to="/accessibility-statement/">
                Accessibility
              </Link>
              <span> &middot; </span>
              <Link muted to="/colophon/">
                Colophon
              </Link>
              <span> &middot; </span>
              &copy; {currentYear} Laurie Jones
            </Text>
          </Padding>
        </Grid.Unit>
      </Grid>
    </FooterWrapper>
  );
};

export default Footer;

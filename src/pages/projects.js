import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  Margin,
  Padding,
  p,
  m,
  px,
  py,
  mr,
  mb,
} from 'styled-components-spacing';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Copy from '../components/Copy';

const HideBelowMd = styled.div`
  display: none;
  ${breakpoint('md')`
    display: block;
  `}
`;

const HideAboveMd = styled.div`
  ${breakpoint('md')`
    display: none;
  `}
`;

const CenteredBelowMd = styled.div`
  text-align: center;
  ${breakpoint('md')`
    text-align: left;
  `}
`;

const List = styled.ul`
  list-style-type: none;
  ${p(0)};
  ${m(0)};
`;

const Tag = styled.span`
  ${px(3)};
  ${py(2)};
  ${mb(1)};
  ${mr(1)};
  display: inline-block;
  border-radius: 100px;
  background-color: ${props => props.theme.colors.black06};
  font-size: ${props => props.theme.typeScale[6]};
  line-height: ${props => props.theme.lineHeights.solid};
`;

const IndexPage = () => (
  <Layout>
    <main id="maincontent">
      <Panel>
        <Margin bottom={4}>
          <Heading size={2}>
            <strong>Projects</strong> &mdash;
          </Heading>
        </Margin>

        <Margin bottom={3}>
          <Copy size="large" lineHeight="copy">
            Projects I have been involved in at work, freelance client work or
            open source packages.
          </Copy>
        </Margin>

        <List>
          <li>
            <Link href="https://design.nib.com.au" target="_blank">
              nib Design System
            </Link>
          </li>
          <li>
            <Link href="https://www.skeltonconsulting.com.au" target="_blank">
              Skelton Consulting Engineers
            </Link>
          </li>
          <li>
            <Link href="https://www.blackbutthotel.com.au" target="_blank">
              Blackbutt Hotel
            </Link>
          </li>
          <li>
            <Link href="https://www.harbour-radiology.com.au" target="_blank">
              Harbour Radiology
            </Link>
          </li>
        </List>

        <Margin bottom={4}>
          <Copy>
            Passionate about empowering teams to quickly build consistent,
            high-quality and inclusive user interfaces.
          </Copy>
        </Margin>
      </Panel>
    </main>
  </Layout>
);

export default IndexPage;

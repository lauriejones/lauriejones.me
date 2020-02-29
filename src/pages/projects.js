import React from 'react';
import styled from 'styled-components';
import { Margin, p, m, mb } from 'styled-components-spacing';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Copy from '../components/Copy';

const List = styled.ul`
  list-style-type: square;
  /* ${p(0)};
  ${m(0)}; */
`;

const Item = styled.li`
  ${mb(1)};
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
          <Item>
            <Link href="https://design.nib.com.au" target="_blank">
              nib Design System
            </Link>
          </Item>
          <Item>
            <Link href="https://www.skeltonconsulting.com.au" target="_blank">
              Skelton Consulting Engineers
            </Link>
          </Item>
          <Item>
            <Link href="https://www.blackbutthotel.com.au" target="_blank">
              Blackbutt Hotel
            </Link>
          </Item>
          <Item>
            <Link href="https://www.harbour-radiology.com.au" target="_blank">
              Harbour Radiology
            </Link>
          </Item>
          <Item>
            <Link href="#" target="_blank">
              useHeadRequest
            </Link>
          </Item>
        </List>

        <Margin bottom={4}>
          <Copy>
            I have over 10 years professional experience as a web designer and
            front-end developer.
          </Copy>
        </Margin>
        <Margin bottom={4}>
          <Copy>
            I am most comfortable working on the{' '}
            <em>&ldquo;front of the frontend.&rdquo;</em>. I have extensive
            experience in building semantic html, maintainable css architecture
            in react applications. For the last 2 years I have been primarily
            focused on building and maintining design systems as part of a
            small, dedicated designops team.
          </Copy>
        </Margin>
      </Panel>
    </main>
  </Layout>
);

export default IndexPage;

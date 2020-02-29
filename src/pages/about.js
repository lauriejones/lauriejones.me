import React from 'react';
import styled from 'styled-components';
import { Margin, p, m, mb } from 'styled-components-spacing';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Copy from '../components/Copy';

const IndexPage = () => (
  <Layout>
    <main id="maincontent">
      <Panel>
        <Margin bottom={4}>
          <Heading size={2}>
            <strong>About LJ</strong> &mdash;
          </Heading>
        </Margin>

        <Margin bottom={3}>
          <Copy size="large" lineHeight="copy">
            I have over 10 years professional experience as a web designer and
            front-end developer. For the last 5 years I have primarily focused
            on development whilst working alongside many talent designers at
            nib.
          </Copy>
        </Margin>

        <Margin bottom={4}>
          <Copy>
            I am most comfortable working on the{' '}
            <em>
              &ldquo;
              <Link href="https://css-tricks.com/the-great-divide/">
                front of the front-end
              </Link>
              .&rdquo;
            </em>
            . I have extensive experience in building semantic html,
            maintainable css architecture in react applications.
          </Copy>
        </Margin>

        <Margin bottom={4}>
          <Copy>
            I have been focused on building and maintining design systems as
            part of a small, dedicated designops team for the last 2 years. A
            theme-driven react and styled-components component library, sketch
            symbol library, storybook ecosystem, communications.
          </Copy>
        </Margin>
      </Panel>
    </main>
  </Layout>
);

export default IndexPage;

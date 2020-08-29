import React from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Text from '../components/Text';

const AccessibilityStatementPage = () => (
  <Layout>
    <Helmet>
      <title>Accessibility statement</title>
    </Helmet>
    <Panel>
      <Stack space={4}>
        <Heading size={1}>Accessibility Statement &mdash;</Heading>

        <Text>
          It is my aim that this small, personal site is accessible to all who
          wish to visit it.
        </Text>

        <Heading size={2}>Accessible features</Heading>

        <Text>
          Semantic markup with appropriate landmarks and heading heirarchy, skip
          to content links, a no-javascript experience.
        </Text>

        <Text>Ensure at least AA, if not AAA WCAG contrast ratios.</Text>

        <Text>
          As performant as is possible with the chosen tech stack. Gatsby does
          have its issues with the amount of javascript it loads
        </Text>

        <Heading size={2}>Known issues</Heading>

        <Text>
          Gatsby does have its issues with the amount of client-side javascript
          it loads. There are things I can do to improve this: switch from react
          to preact, or by removing all client-side javascript using{' '}
          <Link href="https://www.gatsbyjs.org/packages/gatsby-plugin-no-javascript/">
            gatsby-plugin-no-javascript
          </Link>
          .
        </Text>

        <Text>High contrast mode support?</Text>

        <Heading size={3}>Report an issue</Heading>
        <Text>
          If you have any trouble using this site, please{' '}
          <Link href="https://twitter.com/laurie_jones">
            let me know on twitter
          </Link>
          .
        </Text>
      </Stack>
    </Panel>
  </Layout>
);

export default AccessibilityStatementPage;

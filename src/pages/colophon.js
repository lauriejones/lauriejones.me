import React from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Text from '../components/Text';

const ExternalLink = props => <Link rel="noopener noreferrer" {...props} />;

const ColophonPage = () => (
  <Layout>
    <Helmet>
      <title>Colophon</title>
    </Helmet>
    <Panel>
      <Stack space={4}>
        <Heading size={1}>Colophon &mdash;</Heading>
        <Text lineHeight="copy" measure={true}>
          Site built with{' '}
          <ExternalLink href="https://www.gatsbyjs.org">gatsby</ExternalLink>,{' '}
          <ExternalLink href="https://mdxjs.com/">MDX</ExternalLink>,{' '}
          <ExternalLink href="https://www.styled-components.com/">
            styled-components
          </ExternalLink>
          ,{' '}
          <ExternalLink href="https://github.com/jameslnewell/styled-components-breakpoint">
            styled-components-breakpoint
          </ExternalLink>
          ,{' '}
          <ExternalLink href="https://github.com/jameslnewell/styled-components-grid">
            styled-components-grid
          </ExternalLink>
          ,{' '}
          <ExternalLink href="https://github.com/jameslnewell/styled-components-spacing">
            styled-components-spacing
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink href="https://github.com/sergeysova/styled-normalize">
            styled-normalize
          </ExternalLink>
          .
        </Text>

        <Text>
          Site hosted by{' '}
          <ExternalLink href="https://www.netlify.com/">Netlify</ExternalLink>,
          code at{' '}
          <ExternalLink href="https://www.github.com/">GitHub</ExternalLink>.
        </Text>

        <Text role="img" aria-label="Peace">
          ✌️
        </Text>
      </Stack>
    </Panel>

    {/* <Panel bg={props => props.theme.colors.yellow}>
      <Stack>
        <Grid gap="1rem">
          <Grid.Unit size={{ lg: 0.5 }} gap="1rem">
            <Stack>
              <Heading size={2}>Inspiration</Heading>
              <Inline>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
                <Tag>JS</Tag>
                <Tag>Accessibility</Tag>
                <Tag>Design Systems</Tag>
                <Tag>UX</Tag>
                <Tag>UI</Tag>
              </Inline>
            </Stack>
          </Grid.Unit>
          <Grid.Unit size={{ lg: 0.5 }} gap="1rem">
            <Stack>
              <Heading size={2}>Tools I like</Heading>

              <Inline>
                <Tag>React</Tag>
                <Tag>Styled Components</Tag>
                <Tag>Gatsby</Tag>
                <Tag>Storybook</Tag>
                <Tag>Sketch</Tag>
                <Tag>npm</Tag>
                <Tag>Yarn</Tag>
                <Tag>Lerna</Tag>
              </Inline>
            </Stack>
          </Grid.Unit>
        </Grid>
      </Stack>
    </Panel> */}
  </Layout>
);

export default ColophonPage;

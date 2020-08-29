import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {Padding} from 'styled-components-spacing';
import { Helmet } from 'react-helmet';
import Grid from '../components/Grid';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Inline from '../components/Inline';
import Stack from '../components/Stack';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Tag from '../components/Tag';
import Text from '../components/Text';
import headshot from '../assets/2020-sml.jpg';
import { MESH_URL } from '../constants';

const HideBelowMd = styled.div`
  display: none;
  ${breakpoint('md')`
    display: block;
  `}
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  max-width: 480px;
  max-height: 100%;
`;

// const Timeframe = styled(Text)`
//   color: ${props => props.theme.colors.black54};
// `;

const CssGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
`;

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Panel>
      <Padding bottom={5}>
      <Stack space={4}>
        <Heading size={1}>About &mdash;</Heading>

        <CssGrid>
          <Grid.Unit size={{ lg: 'min' }}>
            <Stack space={4}>
              <Text size="large">
                I&apos;m Laurie Jones from Newcastle, Australia and I have over
                ten years&apos; experience as a designer and front-end developer
                of the web. I am passionate about building inclusive user
                interfaces to help people to get things done.
              </Text>

              <Text>
                I am most comfortable working on the{' '}
                <em>
                  &ldquo;
                  <Link href="https://css-tricks.com/the-great-divide/">
                    front of the front-end
                  </Link>
                  .&rdquo;
                </em>
                . I have extensive experience in building semantic html and
                maintainable css architecture most recently within react
                applications.
              </Text>

              <Text>
                I am currently leading the DesignOps team at{' '}
                <Link
                  href="https://twitter.com/nibhealthfunds"
                  rel="noopener noreferrer"
                >
                  nib Group
                </Link>
                , working on building and maintaining our design system,{' '}
                <Link href={MESH_URL} rel="noopener noreferrer">
                  Mesh
                </Link>
                . We have an established react component library in use right
                across the group.
              </Text>

              <Text>
                I love the craft of building user interfaces for the web and
                consider myself lucky that this is a viable career.
              </Text>

              <Text>
                Please{' '}
                <Link href="https://twitter.com/laurie_jones">
                  talk to me on twitter
                </Link>
                .
              </Text>

              {/* <div>
                <Timeframe>June 2018 &mdash; current</Timeframe>
                <Heading size={4}>
                  Senior Frontend Developer in the DesignOps team at nib
                </Heading>
              </div>

              <div>
                <Timeframe>Mar 2015 &mdash; Dec 2018</Timeframe>
                <Heading size={4}>
                  Frontend Developer in the Online Acquisitions team at nib
                </Heading>
              </div>

              <div>
                <Timeframe>Mar 2012 &mdash; Sep 2014</Timeframe>
                <Heading size={4}>
                  Web Designer &amp; Developer at Redback Solutions
                </Heading>
              </div>

              <hr /> */}
            </Stack>
          </Grid.Unit>

          <HideBelowMd>
            <Image
              src={headshot}
              alt="A headshot of Laurie Jones with tropical plants in the background"
            />
          </HideBelowMd>
        </CssGrid>
      </Stack>
      </Padding>
    </Panel>

    <Panel bg={props => props.theme.colors.yellow} decorative>
      <Stack>
        <Grid gap="1rem">
          <Grid.Unit size={{ lg: 0.5 }} gap="2rem">
            <Stack style={{ textAlign: 'center' }}>
              <Heading size={2}>Things I care about</Heading>
              <Inline space={2}>
                <Tag>Accessibility</Tag>
                <Tag>UX</Tag>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
                <Tag>JS</Tag>
                <Tag>Design Systems</Tag>
                <Tag>UI</Tag>
              </Inline>
            </Stack>
          </Grid.Unit>
          <Grid.Unit size={{ lg: 0.5 }} gap="2rem">
            <Stack style={{ textAlign: 'center' }}>
              <Heading size={2}>Tools I like to use</Heading>

              <Inline space={2}>
                <Tag>React</Tag>
                <Tag>Styled Components</Tag>
                <Tag>Gatsby</Tag>
                <Tag>Storybook</Tag>
                <Tag>Playroom</Tag>
                <Tag>npm</Tag>
                <Tag>Yarn</Tag>
              </Inline>
            </Stack>
          </Grid.Unit>
        </Grid>
      </Stack>
    </Panel>
  </Layout>
);

export default AboutPage;

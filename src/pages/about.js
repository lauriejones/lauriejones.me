import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Padding, Margin } from 'styled-components-spacing';
import { Helmet } from 'react-helmet';
import Divider from '../components/Divider';
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

const Timeframe = styled(Text)`
  color: ${props => props.theme.colors.black54};
`;

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
              <Stack space="4">
                <Text size="large" lineHeight="title">
                  I&apos;m Laurie Jones from Newcastle, Australia and I have
                  over ten years&apos; experience as a designer and front-end
                  developer of the web. I am passionate about building inclusive
                  user interfaces to help people to get things done.
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
                    href="https://www.nib.com.au"
                    rel="noopener noreferrer"
                  >
                    nib Group
                  </Link>
                  , working on building and maintaining the{' '}
                  <Link href={MESH_URL} rel="noopener noreferrer">
                    Mesh Design System
                  </Link>
                  . We have an established react component library in use right
                  across the company.
                </Text>

                <Text>
                  I love the craft of building user interfaces for the web and
                  consider myself lucky that this is a viable career.
                </Text>

                <Text>
                  If you have similar interests then I&apos;d love to{' '}
                  <Link href="https://bsky.app/profile/lauriejones.bsky.social" rel="noopener noreferrer">
                    chat on bluesky
                  </Link>
                  .
                </Text>
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

    <Panel bg={props => props.theme.colors.nearWhite}>
      <Stack space="4">
        <Heading size={2}>Experience &mdash;</Heading>

        <div>
          <Timeframe>March 2021 &mdash; current</Timeframe>
          <Heading size={4} style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>Lead Frontend Developer</span> <span>DesignOps team &middot; <Link href="https://www.nib.com.au" rel="noopener noreferrer">nib Group</Link></span>
          </Heading>
        </div>

        <Divider />

        <div>
          <Timeframe>June 2018 &mdash; February 2021</Timeframe>
          <Heading size={4} style={{display: 'flex', justifyContent: 'space-between', opacity: 0.8}}>
            <span>Senior Frontend Developer</span> <span>DesignOps team &middot; <Link href="https://www.nib.com.au" rel="noopener noreferrer">nib Group</Link></span>
          </Heading>
        </div>

        <Divider />

        <div>
          <Timeframe>March 2015 &mdash; December 2018</Timeframe>
          <Heading size={4} style={{display: 'flex', justifyContent: 'space-between', opacity: 0.7}}>
            <span>Frontend Developer</span> <span>Online Acquisitions team &middot; <Link href="https://www.nib.com.au" rel="noopener noreferrer">nib Group</Link></span>
          </Heading>
        </div>

        <Divider />

        <div>
          <Timeframe>Mar 2012 &mdash; September 2014</Timeframe>
          <Heading size={4} style={{display: 'flex', justifyContent: 'space-between', opacity: 0.6}}>
            <span>Web Designer &amp; Developer</span> <span><Link href="https://www.rb.com.au" rel="noopener noreferrer">Redback Solutions</Link></span>
          </Heading>
        </div>
      </Stack>
    </Panel>

    <Panel bg={props => props.theme.colors.yellow} decorative>
      <Stack>
        <Grid>
          <Grid.Unit size={{ lg: 0.5 }}>
            <Margin bottom={{ xs: 6, lg: 0 }}>
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
                  <Tag>Craft beer</Tag>
                  <Tag>Coffee</Tag>
                  <Tag>My family</Tag>
                </Inline>
              </Stack>
            </Margin>
          </Grid.Unit>
          <Grid.Unit size={{ lg: 0.5 }}>
            <Stack style={{ textAlign: 'center' }}>
              <Heading size={2}>Tools I like to use</Heading>

              <Inline space={2}>
                <Tag>GitHub</Tag>
                <Tag>React</Tag>
                <Tag>Styled Components</Tag>
                <Tag>NextJS</Tag>
                <Tag>Style Dictionary</Tag>
                <Tag>Playroom</Tag>
                <Tag>Storybook</Tag>
                <Tag>npm</Tag>
                <Tag>Figma</Tag>
              </Inline>
            </Stack>
          </Grid.Unit>
        </Grid>
      </Stack>
    </Panel>
  </Layout>
);

export default AboutPage;

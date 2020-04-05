import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';
import { Margin, Padding, px, py } from 'styled-components-spacing';
import { Helmet } from 'react-helmet';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Inline from '../components/Inline';
import Stack from '../components/Stack';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Copy from '../components/Copy';
import headshot from '../assets/lauriejones.jpg';

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

const Image = styled.img`
  display: inline-block;
  /* width: 11.25rem; */
  /* height: 11.25rem; */
  /* border-radius: 50%; */
`;

const Timeframe = styled(Copy)`
  color: ${props => props.theme.colors.black54};
`;

const Tag = styled.span`
  ${px(3)};
  ${py(2)};
  display: inline-block;
  border: 2px solid ${props => props.theme.colors.black54};
  border-radius: 100px;

  /* background-color: ${props => props.theme.colors.black06}; */
  font-size: ${props => props.theme.typeScale[6]};
  line-height: ${props => props.theme.lineHeights.solid};
`;

const AboutPage = () => (
  <Layout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Panel>
      <Stack space={4}>
        <HideAboveMd>
          <Margin bottom={3}>
            <CenteredBelowMd>
              <Image
                src={headshot}
                alt="A headshot of Laurie Jones with tropical plants in the background"
              />
            </CenteredBelowMd>
          </Margin>
        </HideAboveMd>

        <Heading size={1}>About &mdash;</Heading>

        <Grid wrap={false}>
          <Grid.Unit size={{ lg: 'min' }}>
            <Stack space={4}>
              <Copy size="large" lineHeight="copy">
                I have over 10 years professional experience as a web designer
                and front-end developer. For the last 5 years I have primarily
                focused on development whilst working alongside many talented
                designers at{' '}
                <Link href="https://twitter.com/nibhealthfunds">
                  nib Health Funds
                </Link>
                .
              </Copy>

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

              <Copy>
                I have been focused on building and maintaining design systems as part of a small, dedicated designops team for the last 2 years. Our system consists of a theme-driven react and styled-components component library, sketch symbol library with RSS updates, standalone tailwind CSS Framework, storybook ecosystem, communications.
              </Copy>

              <hr />

              <div>
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

              <hr />

              <Heading size={2}>Things I care about</Heading>

              <Inline>
                <Tag>CSS</Tag>
                <Tag>HTML</Tag>
                <Tag>JS</Tag>
                <Tag>Accessibility</Tag>
                <Tag>Design Systems</Tag>
                <Tag>React</Tag>
                <Tag>Styled Components</Tag>
                <Tag>Gatsby</Tag>
                <Tag>Storybook</Tag>
                <Tag>Sketch</Tag>
                <Tag>Gatsby</Tag>
                <Tag>UX</Tag>
                <Tag>UI</Tag>
              </Inline>
            </Stack>
          </Grid.Unit>

          <HideBelowMd>
            <Grid.Unit size={{ lg: 'min' }}>
              <Padding left={4}>
                <Image
                  src={headshot}
                  alt="A headshot of Laurie Jones with tropical plants in the background"
                />
              </Padding>
            </Grid.Unit>
          </HideBelowMd>
        </Grid>
      </Stack>
    </Panel>
  </Layout>
);

export default AboutPage;

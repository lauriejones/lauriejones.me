import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';
import { Margin, Padding, px, py, mr, mb } from 'styled-components-spacing';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
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

const CircleImage = styled.img`
  display: inline-block;
  width: 11.25rem;
  height: 11.25rem;
  border-radius: 50%;
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

const AboutPage = () => (
  <Layout>
    <main id="maincontent">
      <Panel>
        <HideAboveMd>
          <Margin bottom={3}>
            <CenteredBelowMd>
              <CircleImage
                src={headshot}
                alt="A headshot of Laurie Jones with tropical plants in the background"
              />
            </CenteredBelowMd>
          </Margin>
        </HideAboveMd>

        <Margin bottom={4}>
          <Heading size={2}>
            <strong>About</strong> &mdash;
          </Heading>
        </Margin>

        <Grid wrap={false}>
          <Grid.Unit size={{ lg: 'min' }}>
            <Margin bottom={3}>
              <Copy size="large" lineHeight="copy">
                I am a front-end developer and UI designer with eight years professional experience.
              </Copy>
            </Margin>

            <Margin bottom={3}>
              <Copy size="large" lineHeight="copy">
                I have been working at nib Health Funds for five years and for the last two I have been focusedCurrently working in DesignOps at{' '}
                <Link href="https://twitter.com/nibhealthfunds">
                  @nibhealthfunds
                </Link>
                . Focused on improving our{' '}
                <Link href="https://design.nib.com.au">design system</Link>,
                tooling and processes.
              </Copy>
            </Margin>

            <Margin bottom={4}>
              <Copy>
                June 2018 &mdash; current
              </Copy>
              <Heading size={4}>Senior Frontend Developer in the DesignOps team at nib</Heading>
            </Margin>

            <Margin bottom={4}>
              <Copy>
                Mar 2015 &mdash; Dec 2018 
              </Copy>
              <Heading size={4}>Frontend Developer in the Online Acquisitions team at nib</Heading>
            </Margin>

            <Margin bottom={4}>
              <Copy>
                Mar 2012 &mdash; Sep 2014 
              </Copy>
              <Heading size={4}>Web Designer &amp; Developer at Redback Solutions</Heading>
            </Margin>

            <Tag>CSS</Tag>
            <Tag>HTML</Tag>
            <Tag>JS</Tag>
            <Tag>Accessibility</Tag>
            <Tag>Design Systems</Tag>
            <Tag>React</Tag>
            <Tag>Styled Components</Tag>
            <Tag>Gatsby</Tag>
            <Tag>UX</Tag>
            <Tag>UI</Tag>
          </Grid.Unit>

          <HideBelowMd>
            <Grid.Unit size={{ lg: 'min' }}>
              <Padding left={4}>
                <CircleImage
                  src={headshot}
                  alt="A headshot of Laurie Jones with tropical plants in the background"
                />
              </Padding>
            </Grid.Unit>
          </HideBelowMd>
        </Grid>
      </Panel>
    </main>
  </Layout>
);

export default AboutPage;

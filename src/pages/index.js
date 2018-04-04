import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';
import {Margin, Padding} from 'styled-components-spacing';
import GatsbyLink from 'gatsby-link';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Panel from '../components/Panel';
import Copy from '../components/Copy';

import headshot from '../assets/lauriejones.jpg';

const Hr = styled.hr`
  margin: 0;
  border: none;
  border-top: .125rem solid hsla(0, 0%, 0%, .1);
  max-width: 2rem;
`;

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
  border-radius: 50%;
`;

const IndexPage = () => (
  <main id="maincontent">
    <Panel>
      
      <HideAboveMd>
        <Margin bottom={3}>
          <CenteredBelowMd>
            <CircleImage 
              src={headshot} 
              width="180" 
              height="180" 
              alt="A headshot of Laurie Jones with tropical plants in the background"
            />
          </CenteredBelowMd>
        </Margin>
      </HideAboveMd>

      <Margin bottom={4}>
        <Heading size={2}><strong>Laurie Jones</strong> &mdash; front&ndash;end developer and designer based in Newcastle, Australia.</Heading>
      </Margin>

      <Grid wrap={false}>

        <Grid.Unit size={{lg: 'min' }}>
          <Margin bottom={3}>
            <Copy size="large" lineHeight="copy">Part of DesignOps at <Link href="https://twitter.com/nibhealthfunds">@nibhealthfunds</Link>. Focused on improving our <Link href="https://design.nib.com.au">design system</Link> and processes.</Copy>
          </Margin>
          
          <Margin bottom={3}>
            <Copy>React, Styled Components, HTML.</Copy>
          </Margin>
        </Grid.Unit>

        <HideBelowMd>
          <Grid.Unit size={{lg: 'min' }}>
            <Padding left={{lg: 4}}>
              <CircleImage 
                src={headshot} 
                width="180" 
                height="180" 
                alt="A headshot of Laurie Jones with tropical plants in the background"
              />
            </Padding>
          </Grid.Unit>
        </HideBelowMd>
        
      </Grid>

      {/* <Link component={GatsbyLink} to="/page-2/">Go to page two!</Link> */}

      {/* <Margin vertical={4}>
        <Hr/>
      </Margin>
      
      <Copy measure={false}>
        <Link href="https://twitter.com/laurie_jones">Twitter</Link>
        <span> &middot; </span> 
        <Link href="https://github.com/lauriejones">GitHub</Link>
        <span> &middot; </span> 
        <Link href="https://npm.im/lauriejones">npm</Link>
        <span> &middot; </span> 
        <Link href="https://au.linkedin.com/in/lauriejonesme">Linked In</Link>
        <span> &middot; </span> 
        <Link href="mailto:hello@lauriejones.me">hello@lauriejones.me</Link>
      </Copy>
       */}
    </Panel>
  </main>
);

export default IndexPage;

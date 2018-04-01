import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import styledNormalize from 'styled-normalize';

import GrowLayout from '../components/GrowLayout';

import Header from '../components/Header';
import Footer from '../components/Footer';
import theme from '../components/Theme';

import favIcon from './favicons/favicon.ico';
import favIcon16 from './favicons/favicon-16x16.png';
import favIcon32 from './favicons/favicon-32x32.png';
import androidChrome192 from './favicons/android-chrome-192x192.png';
import androidChrome512 from './favicons/android-chrome-512x512.png';
import appleTouchIcon from './favicons/apple-touch-icon.png';
import safariPinnedTab from './favicons/safari-pinned-tab.svg';
import mstile from './favicons/mstile-150x150.png';

injectGlobal`
  ${styledNormalize}

  :root {
    font-size: 16px;
  }

  @media screen and (min-width: 30em) {
    :root {
      font-size: calc(16px + (21 - 16) * ( (100vw - 400px) / ( 1200 - 400) ));
    }
  }

  @media screen and (min-width: 60em) {
    :root {
      font-size: 21px;
    }
  }

  *:focus {
    outline: 3px solid #ffeb3b;
  }

  body {
    /* background-color: #222; */
    background-color: ${theme.colors.nearWhite};
    color: ${theme.copy.color};
    font-family: ${theme.copy.fontFamily};
    font-size: ${theme.copy.fontSize};
    line-height: ${theme.copy.lineHeight};
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-rows: 3rem 1fr 3rem;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  grid-row: 2 / span 1;
  grid-column: 1 / span 2;

  ${breakpoint('md')`
    grid-row: 1 / span 2;
    grid-column: 2 / span 1;
  `}
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}> 
    <div>
      <Layout>
        <Helmet>
          <title>Laurie Jones &mdash; Frontend developer &amp; designer based in Newcastle, Australia"</title>
          <meta name="description" content="Laurie Jones is a frontend developer and designer focused on design systems"/>
          <meta name="keywords" content="laurie jones, frontend developer, react developer, ui designer, ux designer, design systems, designops"/>
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
          <link rel="icon" href={favIcon}/>
          <link rel="icon" type="image/png" sizes="32x32" href={favIcon32}/>
          <link rel="icon" type="image/png" sizes="16x16" href={favIcon16}/>
          <link rel="mask-icon" href={safariPinnedTab} color={props => props.theme.colors.green}/>
          <meta name="msapplication-TileColor" content={props => props.theme.colors.green}/>
          <meta name="theme-color" content={props => props.theme.colors.white}/>
        </Helmet>
        <Header />
        <Content>
          {children()}
        </Content>
        <Footer/>
      </Layout>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

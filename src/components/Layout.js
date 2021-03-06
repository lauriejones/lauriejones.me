import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled, {
  ThemeProvider,
  css,
  createGlobalStyle,
} from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { p } from 'styled-components-spacing';
import styledNormalize from 'styled-normalize';

import favIcon from '../assets/favicons/favicon.ico';
import favIcon16 from '../assets/favicons/favicon-16x16.png';
import favIcon32 from '../assets/favicons/favicon-32x32.png';
// import androidChrome192 from '../assets/favicons/android-chrome-192x192.png';
// import androidChrome512 from '../assets/favicons/android-chrome-512x512.png';
import appleTouchIcon from '../assets/favicons/apple-touch-icon.png';
import safariPinnedTab from '../assets/favicons/safari-pinned-tab.svg';
// import mstile from '../assets/favicons/mstile-150x150.png';

import FluidRootFontSize from './Fluid';
import Header from './Header';
import Footer from './Footer';
import Link from './Link';
import theme from './theme';

const Globals = createGlobalStyle`
  ${styledNormalize}

  *:focus {
    outline: ${props => css`.1875em solid ${props.theme.focus}`};
    outline-offset: .125em;
  }

  ::selection {
    background: ${props => props.theme.focus}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${props => props.theme.focus}; /* Gecko Browsers */
  }

  body {
    background-color: ${props => props.theme.colors.white87};
    /* background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red); */
    color: ${props => props.theme.copy.color};
    font-family: ${props => props.theme.copy.fontFamily};
    font-size: ${props => props.theme.copy.fontSize};
    line-height: ${props => props.theme.copy.lineHeight};
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol {
    margin: 0;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* @supports (display: grid) {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 3rem 1fr 3rem;
        } */
`;

const Content = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;

  /* @supports (display: grid) {
    display: grid;
    grid-row: 2 / span 1;
    grid-column: 1 / span 2;

    ${breakpoint('md')`
      grid-row: 1 / span 3;
      grid-column: 2 / span 1;
    `}
  } */
`;

const SkipLink = styled(Link)`
  display: block;
  left: -9999em;
  outline: none;
  top: -9999em;

  ${p(3)};
  background-color: ${props => props.theme.colors.yellow};
  outline: ${props => css`3px solid ${props.theme.focus}`};

  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  width: 1px;

  &:focus {
    clip: auto;
    height: auto;
    left: 8px;
    top: 8px;
    width: auto;
    z-index: 100000;
  }
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Globals />
      <FluidRootFontSize />
      <SkipLink href="#maincontent" muted>
        Skip to main content
      </SkipLink>
      <Layout>
        <Helmet titleTemplate="%s &middot; Laurie Jones">
          <html lang="en-AU" />
          <title>
            Frontend developer &amp; designer based in Newcastle, Australia
          </title>
          <meta
            name="description"
            content="Laurie Jones is a frontend developer and designer based in Newcastle, Australia focused on design systems"
          />
          <meta
            name="keywords"
            content="laurie jones, frontend developer, react developer, ui designer, ux designer, design systems, designops, Newcastle, Australia"
          />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
          <link rel="icon" href={favIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
          <link
            rel="mask-icon"
            href={safariPinnedTab}
            color={props => props.theme.colors.blue}
          />
          <meta
            name="msapplication-TileColor"
            content={props => props.theme.colors.blue}
          />
          <meta
            name="theme-color"
            content={props => props.theme.colors.white}
          />
        </Helmet>
        <Header />
        <Content id="maincontent">{children}</Content>
        <Footer />
      </Layout>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

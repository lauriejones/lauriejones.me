const breakpoints = {
  xs: 0,
  sm: 480,
  md: 640,
  lg: 800,
  xl: 960,
  xxl: 1200,
  xxxl: 1600
};
  
const container = `${breakpoints.xl}px`;

const colors = {
  green: '#39c689',
  blue: '#2b97fd', //'#0C34FF', //'#2b97fd',
  purple: '#5D2CDA', // #7d5ae0
  yellow: '#ffeb3b',
  eigengrau: '#16161d',
  darkGrey: '#333',
  grey: '#777',
  midGrey: '#999',
  lightGrey: '#eee',
  nearWhite: '#f4f4f4',
  white: '#fff',

  black87: 'hsla(0, 0%, 0%, .87)',
  black54: 'hsla(0, 0%, 0%, .54)',
  white87: 'hsla(0, 0%, 100%, .87)',
  white54: 'hsla(0, 0%, 100%, .54)'
}

const spacing = {
  0: '0',
  1: '.25rem',
  2: '.5rem',
  3: '1rem',
  4: '2rem',
  5: '4rem',
  6: '8rem'
};

const typeScale = {
  1: '6rem',
  2: '5rem',
  3: '3rem',
  4: '2.25rem',
  5: '1.5rem',
  6: '1.25rem',
  7: '1rem',
  8: '.875rem'
};

const lineHeights = {
  solid: 1, 
  title: 1.25, 
  copy: 1.5
};

const tracking = {
  normal: 'normal',
  caps: '1.5px'
};

const fonts = {
  system: `
    -apple-system, BlinkMacSystemFont, /* MacOS and iOS */
    'avenir next', avenir, /* MacOS and iOS */
    'Segoe UI', /* Windows */
    'lucida grande', /* Older MacOS */
    'helvetica neue', helvetica, /* Older MacOS */
    'Fira Sans', /* Firefox OS */
    roboto, noto, /* Google stuff */
    'Droid Sans', /* Old Google stuff */
    cantarell, oxygen, ubuntu, /* Linux stuff */
    'franklin gothic medium', 'century gothic', /* Windows stuff */
    'Liberation Sans', /* Linux */
    sans-serif; /* Everything else */
  `
}

export default {
  breakpoints,
  container,
  spacing,
  colors,
  fonts,
  typeScale,
  lineHeights,
  tracking,

  copy: {
    fontFamily: fonts.system,
    fontSize: typeScale[7],
    color: colors.white87,
    lineHeight: lineHeights.copy
  },

  link: {
    color: colors.blue,
    focus: colors.yellow
  }
};

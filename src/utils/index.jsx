import styled, { keyframes } from 'styled-components';
import { colors } from '../components/Theme';

export const rainbowBg = keyframes`
  0% {
    background-color: ${colors.green};
  }
  33% {
    background-color: ${colors.blue};
  }
  66% {
    background-color: ${colors.purple};
  }
  100% {
    background-color: ${colors.green};
  }
`;

export const rainbowFill = keyframes`
  0% {
    fill: ${colors.green};
  }
  33% {
    fill: ${colors.blue};
  }
  66% {
    fill: ${colors.purple};
  }
  100% {
    fill: ${colors.green};
  }
`;

export const rainbowText = keyframes`
  0% {
    color: ${colors.green};
  }
  33% {
    color: ${colors.blue};
  }
  66% {
    color: ${colors.purple};
  }
  100% {
    color: ${colors.green}; 
  }
`;

export const TextCenter = styled.div`
  text-align: center;
`;

// .bg-rainbow {
//   animation: bg-rainbow 8s infinite;
// }

// .hover-bg-rainbow:hover {
//   animation: bg-rainbow 8s infinite;
// }

// .rainbow-text {
//   animation: rainbow-text 2s infinite;
// }

// .hover-rainbow-text:hover {
//   animation: rainbow-text 2s infinite;
// }

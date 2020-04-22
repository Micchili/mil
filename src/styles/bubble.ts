import styled, {keyframes} from 'styled-components';

const BubbleAnimation = keyframes`
  0% {
    bottom: 0;
    transform: scale(0,0) translate(0%, 0%);
  }
  5% {
    transform: scale(1.0,1.0) translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    bottom: 100%;
  }
`;

export const Bubble = styled.div`
  position: relative;
  bottom: 0;
  width: 40px;
  height: 40px;
  border-style: solid;
  border-width: 3px;
  border-color: #ACB6E5;
  border-radius: 50%;
  animation: ${BubbleAnimation} 10s ease-in infinite;

  &:nth-child(1) {
    width: 40px;
    height: 40px;
    left: 30%;
    animation-duration: 6s;
  }

  &:nth-child(2) {
    left: 20%;
    animation-duration: 3.5s;
  }

  &:nth-child(3) {
    width: 30px;
    height: 30px;
    left: 30%;
    animation-duration: 7s;
  }

  &:nth-child(4) {
    width: 100px;
    height: 100px;
    left: 67%;
    animation-duration: 6s;
  }

  &:nth-child(5) {
    width: 30px;
    height: 30px;
    left: 83%;
    animation-duration: 4.5s;
  }

  &:nth-child(6) {
    width: 32px;
    height: 32px;
    left: 56%;
    animation-duration: 10s;
  }
`;

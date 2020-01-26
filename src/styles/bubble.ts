import styled, {keyframes} from 'styled-components';

const BubbleAnimation = keyframes`
  0% {
    bottom: 0px;
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    bottom: 1000px;
  }
`;

export const Bubble = styled.div`
  position: absolute;
  bottom: -40;
  width: 40px;
  height: 40px;
  background: linear-gradient(#05FBFF, #1E00FF);
  border-radius: 50%;
  animation: ${BubbleAnimation} 10s ease-in infinite;

  &:nth-child(1) {
    width: 20px;
    height: 20px;
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
    width: 50px;
    height: 50px;
    left: 67%;
    animation-duration: 6s;
  }

  &:nth-child(5) {
    width: 20px;
    height: 20px;
    left: 70%;
    animation-duration: 4.5s;
  }
`;

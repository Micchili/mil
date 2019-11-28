import transition from 'styled-transition-group'

export const CardWarp = transition.div`
  width: 95vw;
  height: 95vh;
  border-radius: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }
`
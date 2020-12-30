import { keyframes } from 'styled-components'

export const bounceInUpAnimation = keyframes`
   0% {
      opacity: 0;
      transform: translateY(2000px);
   }
   60% {
      opacity: 1;
      transform: translateY(-30px);
   }
   80% {
      transform: translateY(10px);
   }
   100% {
      transform: translateY(0);
   }
`

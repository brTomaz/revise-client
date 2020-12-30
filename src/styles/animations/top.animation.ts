import { AnimationProps } from 'components/AnimatedWrapper/types/animation-props'

export const topAnimation: AnimationProps = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.9
    }
  }
}

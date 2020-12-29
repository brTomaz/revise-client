import { AnimationProps } from 'components/AnimatedWrapper/types/animation-props'

export const leftToRightAnimation: AnimationProps = {
  hidden: { width: '0%' },
  visible: {
    width: '100%',
    transition: {
      delay: 0.4,
      duration: 1.6,
      ease: 'easeInOut'
    }
  }
}

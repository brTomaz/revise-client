import { ReactNode } from 'react'

import { AnimationProps } from './types/animation-props'
import * as Styles from './styles'

type AnimatedWrapperProps = {
  animation: AnimationProps
  hidden?: boolean
  visible?: boolean
  exit?: boolean
  children: ReactNode
}

const AnimatedWrapper = ({
  animation,
  hidden,
  visible,
  children
}: AnimatedWrapperProps) => (
  <Styles.Wrapper
    initial={hidden && 'hidden'}
    animate={visible && 'visible'}
    variants={animation}
  >
    {children}
  </Styles.Wrapper>
)

export default AnimatedWrapper

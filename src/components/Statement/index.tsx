import { ReactNode } from 'react'

import * as Styles from './styles'

export type StatementProps = {
  children: ReactNode
}

const Statement = ({ children }: StatementProps) => (
  <Styles.Wrapper>{children}</Styles.Wrapper>
)

export default Statement

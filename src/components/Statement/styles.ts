import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { StatementProps } from '.'

export const Wrapper = styled.h2<StatementProps>`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

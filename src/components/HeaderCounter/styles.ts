import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  text-align: center;
`
export const TopText = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
  `}
`

export const MainInfo = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: ${theme.font.light};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxhuge};
    `}
  `}
`
export const BottomText = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

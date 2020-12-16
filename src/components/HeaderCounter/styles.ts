import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  text-align: center;
`
export const TopText = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: 400;
`

export const MainInfo = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: 100;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxhuge};
    `}
  `}
`
export const BottomText = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 300;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

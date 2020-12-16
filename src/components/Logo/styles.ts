import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LogoProps } from '.'

const wrapperModifiers = {
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 4.2rem;
      height: 4.5rem;
      svg {
        height: 5.4rem;
        pointer-events: none;
      }
      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.figure<LogoProps>`
  ${({ hideOnMobile }) => css`
    width: 18rem;
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile};
  `}
`

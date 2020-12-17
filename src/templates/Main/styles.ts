import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const shake = keyframes`
  10%, 90% {
    transform: translateX(-1px);
  }

  20%, 80% {
    transform: translateX(1px);
  }

  30%, 50%, 70% {
    transform: translateX(-2px);
  }

  45%, 55% {
    transform: translateX(2px);
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: ${theme.spacings.xlarge} ${theme.spacings.xxhuge};
    ${media.lessThan('medium')`
      padding: ${theme.spacings.small};
    `}

    .wrong {
      color: ${theme.colors.error};
      animation: ${shake} 0.5s cubic-bezier(0.35, 0.05, 0.2, 0.99) both;
    }

    .correct {
      color: ${theme.colors.secondary};
    }
  `}
`
export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.xxlarge};
    color: ${theme.colors.white};
  `}
`

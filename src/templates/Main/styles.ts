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
    padding: 0 ${theme.spacings.small} ${theme.spacings.small};

    display: flex;
    align-items: center;
    justify-content: center;

    .wrong {
      color: ${theme.colors.error};
      animation: ${shake} 0.5s cubic-bezier(0.35, 0.05, 0.2, 0.99) both;
    }

    .correct {
      color: ${theme.colors.secondary};
    }

    ${media.greaterThan('medium')`
      padding-left: ${theme.spacings.xxhuge};
      padding-right:  ${theme.spacings.xxhuge};
      padding-bottom: ${theme.spacings.xxlarge};
    `}
  `}
`
export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding-left: ${theme.spacings.xxhuge};
      padding-right: ${theme.spacings.xxhuge};
    `}

    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  `}
`
export const LoaderWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

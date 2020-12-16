import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as AnswerWrapper } from 'components/Answer/styles'

const fadeInUpBig = keyframes`
   from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      box-shadow: 0 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
      padding: 0 ${theme.spacings.xxlarge};
    `}
  `}
  animation: ${fadeInUpBig} 0.6s ease;
`

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius} ${theme.border.radius}
      ${theme.border.radius} 0;
    padding: ${theme.spacings.small} ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small} ${theme.spacings.xlarge};
    `}

    p {
      font-size: ${theme.font.sizes.large};
      line-height: 1.4;
      text-align: justify;

      max-width: 100%;

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xlarge};
      `}
    }

    img {
      max-width: 100%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const StatementAnswerWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 0.4rem;
    border-radius: ${theme.border.radius};

    ${AnswerWrapper} {
      margin-bottom: 0.4rem;
      :last-child {
        border-radius: 0 0 2.4rem 2.4rem;
        margin-bottom: 0;
      }
    }
  `}
`

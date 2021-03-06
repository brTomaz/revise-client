import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as AnswerWrapper } from 'components/Answer/styles'
import { bounceInUpAnimation } from 'styles/animations'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      box-shadow: 0 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
      padding: 0 ${theme.spacings.xxlarge};
    `}
  `}
  margin-top: -3.6rem;
  min-width: 100%;
  animation: ${bounceInUpAnimation} 2.3s ease-in-out;
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

export const AnswersAndStatementWrapper = styled.div`
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

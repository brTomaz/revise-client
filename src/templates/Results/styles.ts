import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: ${theme.spacings.xlarge} ${theme.spacings.xxhuge};
    ${media.lessThan('medium')`
      padding: ${theme.spacings.small};
    `}
  `}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacings.xxlarge};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.greaterThan('large')`
    flex-direction: row;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.darkSecondary};

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.xxhuge};
    `}
  `}
`

export const ChartWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 32rem;

    margin-bottom: ${theme.spacings.small};
    background: ${theme.colors.white};
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};
    border-radius: 5px;

    ${media.greaterThan('medium')`
      height: 48rem;
      padding: ${theme.spacings.small} ${theme.spacings.medium};
    `}

    ${media.greaterThan('large')`
      width: 50rem;
      height: 40rem;
      margin-bottom: 0;
    `}
  `}
`
export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.small} ${theme.spacings.xlarge}
      ${theme.spacings.medium};

    width: 100%;
    height: 32rem;

    font-size: ${theme.font.sizes.xlarge};

    background: ${theme.colors.white};
    border-radius: 5px;
    text-align: center;

    span {
      display: block;
      margin: 10px 0;
    }

    ${media.greaterThan('medium')`
      height: 48rem;
      padding: ${theme.spacings.small} ${theme.spacings.medium};
    `}

    ${media.greaterThan('large')`
      width: 50rem;
      height: 40rem;
      font-size: ${theme.font.sizes.xhuge};
    `}
  `}
`

export const Button = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: ${theme.spacings.large};

    border: 2px solid ${theme.colors.primary};
    cursor: pointer;

    background: linear-gradient(
      to right,
      ${theme.colors.primary},
      ${theme.colors.primary}
    );

    background-repeat: no-repeat;
    background-size: 0 100%;

    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    border-radius: ${theme.border.radius};

    transition: all, 0.3s ease-in;

    &:hover {
      background-size: 100% 100%;
      color: ${theme.colors.white};
    }
  `}
`

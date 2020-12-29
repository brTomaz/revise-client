import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    width: 100%;
    height: 6.4rem;
    background: linear-gradient(
      120deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary} 100%
    );
  `}
`

import styled, { css, DefaultTheme } from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const BaseToast = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.primary};
  border-radius: 0.5rem;
  color: ${theme.colors.white};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: 4rem;
    }
  }
`

export const Wrapper = styled(ToastContainer)`
  .Toastify__toast--success {
    ${({ theme }) => css`
      ${BaseToast(theme)};
      svg {
        color: ${theme.colors.white};
      }
    `}
  }
`

export const Points = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 7px;
    font-size: ${theme.font.sizes.xhuge};
    font-weight: ${theme.font.bold};
    text-align: center;
    color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall};
    margin: ${theme.spacings.xsmall} 0;
  `}
`
export const Attempt = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`

import styled, { css, DefaultTheme } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import media from 'styled-media-query'

export const BaseToast = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.primary};
  border-radius: 0.5rem;
  color: ${theme.colors.white};
  font-family: inherit;
`

export const ToastSuccessWrapper = styled.div`
  display: flex;
`

export const Wrapper = styled(ToastContainer)`
  width: 100%;

  ${media.greaterThan('medium')`
    width: 38rem;
  `}

  .Toastify__toast--success {
    ${({ theme }) => css`
      ${BaseToast(theme)};

      svg {
        color: ${theme.colors.white};
      }
    `}
  }
`

export const Points = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
export const Attempt = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const TextInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 ${theme.spacings.small};
  `}
`

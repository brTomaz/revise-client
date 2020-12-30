import { toast } from 'react-toastify'
import Lottie from 'react-lottie'

import animation from 'assets/correct-animation.json'
import * as Styles from './styles'
import theme from 'styles/theme'

export type ToastProps = {
  points: number
  attempt: number
}

const defaultOptions = {
  loop: false,
  animationData: animation
}

export const showToast = ({ points, attempt }: ToastProps) => {
  toast.success(
    <Styles.ToastSuccessWrapper>
      <Lottie
        options={defaultOptions}
        height={theme.spacings.xhuge}
        width={theme.spacings.xhuge}
      />
      <Styles.TextInfoWrapper>
        <Styles.Points>Ganhou {points} ponto(s)!</Styles.Points>
        <Styles.Attempt>Você acertou na {attempt}ª tentativa.</Styles.Attempt>
      </Styles.TextInfoWrapper>
    </Styles.ToastSuccessWrapper>
  )
}

const Toast = () => (
  <Styles.Wrapper
    hideProgressBar
    limit={1}
    autoClose={3000}
    pauseOnHover={false}
    pauseOnFocusLoss={false}
  />
)

export default Toast

import { toast } from 'react-toastify'
import Lottie from 'react-lottie'

import animation from 'assets/correct-animation.json'
import * as Styles from './styles'

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
    <div>
      <Lottie options={defaultOptions} height={96} width={96} />
      <Styles.Points>+{points}</Styles.Points>
      <Styles.Attempt>Acertou na {attempt}ª tentativa.</Styles.Attempt>
    </div>
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

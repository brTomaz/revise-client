import Lottie from 'react-lottie'

import animation from 'assets/loading-animation.json'

const loaderOptions = {
  loop: true,
  animationData: animation
}

const Loader = () => <Lottie options={loaderOptions} height={128} width={128} />

export default Loader

import { render } from '@testing-library/react'

import Loader from '.'

describe('<Loader />', () => {
  it('should render the Loader', () => {
    const { container } = render(<Loader />)

    expect(container.firstChild).toMatchSnapshot()
  })
})

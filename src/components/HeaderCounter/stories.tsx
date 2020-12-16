import { Story, Meta } from '@storybook/react/types-6-0'

import HeaderCounter, { HeaderCounterProps } from '.'
import { mockHeaderCounter } from './mock'

export default {
  title: 'HeaderCounter',
  component: HeaderCounter
} as Meta

export const Default: Story<HeaderCounterProps> = (args) => (
  <HeaderCounter {...args} />
)

Default.args = mockHeaderCounter

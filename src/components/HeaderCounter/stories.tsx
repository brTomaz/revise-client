import { Story, Meta } from '@storybook/react/types-6-0'
import theme from 'styles/theme'

import HeaderCounter, { HeaderCounterProps } from '.'
import { mockHeaderCounter } from './mock'

export default {
  title: 'HeaderCounter',
  component: HeaderCounter
} as Meta

export const Default: Story<HeaderCounterProps> = (args) => (
  <div style={{ color: theme.colors.white }}>
    <HeaderCounter {...args} />
  </div>
)

Default.args = mockHeaderCounter

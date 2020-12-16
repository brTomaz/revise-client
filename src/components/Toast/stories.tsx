import { Story, Meta } from '@storybook/react/types-6-0'
import Toast, { showToast } from '.'

export default {
  title: 'Toast',
  component: Toast
} as Meta

showToast({ points: 5, attempt: 1 })
export const Default: Story = () => <Toast />

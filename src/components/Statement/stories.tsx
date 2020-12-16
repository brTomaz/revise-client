import { Story, Meta } from '@storybook/react/types-6-0'

import Statement, { StatementProps } from '.'

export default {
  title: 'Enunciate',
  component: Statement,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<StatementProps> = (args) => <Statement {...args} />

Default.args = {
  children:
    'O número máximo de lâmpadas que podem ser ligadas sem que a televisão pare de funcionar é:'
}

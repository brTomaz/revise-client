/* eslint-disable @typescript-eslint/no-empty-function */
import { Story, Meta } from '@storybook/react/types-6-0'

import Answer, { AnswerProps } from '.'

export default {
  title: 'Answer',
  component: Answer,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const Default: Story<AnswerProps> = (args) => <Answer {...args} />

Default.args = {
  answer:
    'O entendimento de que a luz precisa de um meio de propagação, difundido pelos defensores da existência do éter.',
  handleAnswerClick: () => {}
}

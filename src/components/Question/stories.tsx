import { Story, Meta } from '@storybook/react/types-6-0'

import Question, { QuestionProps } from '.'
import { mockQuestion } from './mock'

export default {
  title: 'Question',
  component: Question,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<QuestionProps> = (args) => <Question {...args} />

Default.args = mockQuestion

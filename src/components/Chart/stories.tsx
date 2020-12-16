import { Story, Meta } from '@storybook/react/types-6-0'

import Chart from '.'

export default {
  title: 'Chart',
  component: Chart
} as Meta

export const Default: Story = (args) => <Chart chartData={args.chartData} />

Default.args = {
  chartData: [1, 2, 3, 4, 5]
}

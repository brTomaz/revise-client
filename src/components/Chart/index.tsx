import { Bar } from 'react-chartjs-2'

import theme from 'styles/theme'

const data = {
  labels: ['Primeira', 'Segunda', 'Terceira', 'Quarta', 'Quinta'],
  datasets: [
    {
      label: 'N° de acertos por tentativa',
      backgroundColor: theme.colors.primary,
      borderWidth: 0,
      hoverBackgroundColor: theme.colors.secondary,
      data: [0, 0, 0, 0, 0]
    }
  ]
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }
    ]
  }
}

type ChartProps = {
  chartData: number[]
}

const Chart = ({ chartData }: ChartProps) => {
  data.datasets[0].data = chartData
  return <Bar options={options} data={data} />
}

export default Chart

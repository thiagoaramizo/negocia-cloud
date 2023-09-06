import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export const ActiveRiskStatusPie = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const pieChartdata = {
    labels: ['Risco Alto', 'Risco Médio', 'Risco Baixo'],
    datasets: [
      {
        label: 'Número de processos',
        data: [12, 19, 10],
        backgroundColor: [
          'rgba(53, 162, 235, 0.5)',
          'rgba(16, 185, 129, 0.65)',
          'rgba(16, 185, 129, 1)',
        ],
        borderWidth: 0,
      },
    ],
  }

  return (
    <div className='bg-white rounded-lg shadow-lg w-full px-4 py-4 flex flex-col'>
      <h3 className='font-semibold text-emerald-700 pb-8'>Risco de cobranças ativas</h3>
      <Pie data={pieChartdata} height={150} style={{width: '100%'}}/>
    </div>
  )
}
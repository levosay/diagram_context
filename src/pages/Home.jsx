import { Base } from '@/layouts'
import { Bar, Line, Radar, Scatter } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const valueFirst = [30, 25, 84, 44, 100, 89, 34]
const valueTwo = [98, 12, 34, 82, 32, 22, 95]

const dataset = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: valueFirst,
      backgroundColor: 'rgba(136,210,22,0.5)'
    },
    {
      label: 'Dataset 2',
      data: valueTwo,
      backgroundColor: 'rgba(24,71,190,0.5)'
    }
  ]
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'таблица 1'
    }
  }
}


const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'таблица 2'
    }
  }
}

const dataset2 = {
  labels: [...labels, ...labels],
  datasets: [
    {
      fill: true,
      label: 'Dataset 3',
      data: [...valueFirst, ...valueTwo],
      borderColor: 'rgb(111,192,243)',
      backgroundColor: 'rgba(12,88,131,0.5)'
    }
  ]
}

const dataset3 = {
  labels: [
    'Сила',
    'Ловкость',
    'Выносливость',
    'Богоподобность',
    'Интеллект',
    'Удача'
  ],
  datasets: [
    {
      label: 'Стата перса',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
}

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

const dataset4 = {
  datasets: [
    {
      label: 'Таблица с кучей точек',
      data: Array.from({ length: 100 }, () => ({
        x: randomInteger(-100, 100),
        y: randomInteger(-100, 100)
      })),
      backgroundColor: 'rgb(236,138,159)'
    }
  ]
}

export const Home = () => {
  return (
    <Base>
      <div className="flex gap-5">
        <div className="w-1/2">
          <Bar data={dataset} options={options} />
        </div>
        <div className="w-1/2">
          <Line data={dataset2} options={options2} />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-1/2">
          <Radar data={dataset3} />
        </div>
        <div className="w-1/2">
          <Scatter data={dataset4} />
        </div>
      </div>
    </Base>
  )
}

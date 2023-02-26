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
import { useContext, useMemo } from 'react'
import { ContextApp, SET_TAB } from '@/contexts/tableTabs'
import {
  dataset,
  dataset2,
  dataset3,
  dataset4,
  options,
  options2,
  tabs
} from '@/public'

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

export const Home = () => {
  const { state, dispatch } = useContext(ContextApp)

  const toTab = (id) => {
    dispatch({
      type: SET_TAB,
      payload: id
    })
  }

  const tabsList = useMemo(() => (
    tabs.map(({ id, title }) => {
      const active = state.tab === id ? 'border-b-2' : ''

      return (
        <span
          className={`text-amber-700 cursor-pointer hover:text-amber-900 ${active}`}
          onClick={() => toTab(id)}
        >
            {title}
          </span>
      )
    })
  ), [state.tab])

  return (
    <Base>
      <div className="container flex flex-col items-center gap-12 mx-auto">
        <div className="flex items-center gap-4 py-4">
          {tabsList}
        </div>

        {state.tab === 1 &&
          <div className="w-1/2">
            <Bar data={dataset} options={options} />
          </div>
        }
        {state.tab === 2 &&
          <div className="w-1/2">
            <Line data={dataset2} options={options2} />
          </div>
        }
        {state.tab === 3 &&
          <div className="w-1/2">
            <Radar data={dataset3} />
          </div>
        }
        {state.tab === 4 &&
          <div className="w-1/2">
            <Scatter data={dataset4} />
          </div>
        }
      </div>
    </Base>
  )
}

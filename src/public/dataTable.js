export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
export const valueFirst = [30, 25, 84, 44, 100, 89, 34]
export const valueTwo = [98, 12, 34, 82, 32, 22, 95]

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

export const dataset = {
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

export const options = {
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


export const options2 = {
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

export const dataset2 = {
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

export const dataset3 = {
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

export const dataset4 = {
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

export const tabs = [
  {
    id: 1,
    title: 'Таблица 1'
  },
  {
    id: 2,
    title: 'Таблица 2'
  },
  {
    id: 3,
    title: 'Таблица 3'
  },
  {
    id: 4,
    title: 'Таблица 4'
  }
]

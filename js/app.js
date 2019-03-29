
// CHARTS

// trafficChart
const chart1 = document.getElementById('trafficChart');
const trafficChart = new Chart(chart1, {
  type: 'line',
  options: {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 500,
          max: 2500,
        }
      }],
      xAxes: [{
        ticks: {
          maxTicksLimit: 11
        }
      }]
    }
  },
  data: {
    labels: [
      '',
      '16-22',
      '23-29',
      '30-5',
      '6-12',
      '13-19',
      '20-26',
      '27-3',
      '4-10',
      '11-17',
      '18-24',
      '25-31'],
    datasets: [{
      data: [
        {t:0,y:0},
        {t:1,y:500},
        {t:2,y:1000},
        {t:2.5,y:750},
        {t:3.5,y:1250},
        {t:4.5,y:1750},
        {t:5.5,y:1250},
        {t:6,y:1500},
        {t:7,y:1000},
        {t:8,y:1500},
        {t:9,y:2000},
        {t:10,y:1500},
        {t:11,y:2000}
      ],
      backgroundColor: 'rgba(226, 227, 246, 0.7)',
      borderColor: 'rgba(116, 119, 191, 1)',
      borderWidth: .5
    }]
  }
})

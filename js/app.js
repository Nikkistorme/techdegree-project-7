
// CHARTS

// trafficChart
const chart1 = document.getElementById('trafficChart');
const trafficChart = new Chart(chart1, {
  type: 'line',
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
        0,
        500,
        1000,
        750,
        1250,
        1750,
        1250,
        1500,
        1000,
        1500,
        2000,
        1500
      ],
      backgroundColor: 'rgba(226, 227, 246, 0.7)',
      borderColor: 'rgba(116, 119, 191, 1)',
      borderWidth: .5
    }]
  },
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
          maxTicksLimit: 12
        }
      }]
    },
    elements: {
      line: {
        tension: 0
      }
    }
  }
})

// DAILY TRAFFIC BAR CHART
const chart2 = document.getElementById('dailyTrafficChart');
const dailyTrafficChart = new Chart(chart2, {
  type: 'bar',
  data: {
    labels: [
      'S',
      'M',
      'T',
      'W',
      'T',
      'F',
      'S'
    ],
    datasets: [
      {
        label: 'Daily Users (thousands)',
        backgroundColor: ['#7377BF','#7377BF','#7377BF','#7377BF','#7377BF','#7377BF','#7377BF'],
        data: [50,75,150,100,200,175,75]
      }
    ]
  },
  options: {
    responsive: true,
    legend: { display: false },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 50,
          max: 250
        }
      }]
    }
  }
})

// MOBILE USERS PIE CHART
const chart3 = document.getElementById('mobileUsersChart');
const mobileUsersChart = new Chart(chart3, {
  type: 'doughnut',
  data: {
    labels: [
      'Phones',
      'Tablets',
      'Desktop'
    ],
    datasets: [{
      backgroundColor: ['#74B1BF', '#81C98F', '#7377BF'],
      data: [15, 25, 60]
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 13
      }
    }
  }
})

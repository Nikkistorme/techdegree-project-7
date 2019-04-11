
// CHARTS

// trafficChart
const hourlyLabels = ['8:00a','9:00a','10:00a','11:00a','12:00p','1:00p','2:00p','3:00p','4:00p','5:00p','6:00p'];
const hourlyData = ['5','8','7','12','15','16','17','10','13','2','20'];
const hourlyStepSize = 5;
const hourlyStepMax = 25;
const dailyLabels = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const dailyData = ['75','120','150','200','100','235','142'];
const dailyStepSize = 50;
const dailyStepMax = 250;
const weeklyLabels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
const weeklyData = [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500];
const weeklyStepSize = 500;
const weeklyStepMax = 2500;
const monthlyLabels = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const monthlyData = ['5000','3000','10000','12000','7000','6000','5500','15000','17500','20000','13000','9000'];
const monthlyStepSize = 5000;
const monthlyStepMax = 25000;

const chart1 = document.getElementById('trafficChart');
function createLineChart(labels, data, stepSize, stepMax) {
  const trafficChart = new Chart(chart1, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: 'rgba(226, 227, 246, 0.7)',
        borderColor: 'rgba(116, 119, 191, 1)',
        borderWidth: .5
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: stepSize,
            max: stepMax,
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
        },
        point: {
          radius: 5,
          backgroundColor: 'rgba(0, 0, 0, 0)'
        }
      }
    }
  })  
};

createLineChart(weeklyLabels, weeklyData, weeklyStepSize, weeklyStepMax);


// adjust traffic chart based on navigation
const trafficNav = document.getElementById('traffic-chart-nav');
let trafficLinks = document.getElementsByClassName('traffic-link');

trafficNav.addEventListener('click', (e) => {
  if (e.target.textContent === 'Hourly') {
    createLineChart(hourlyLabels, hourlyData, hourlyStepSize, hourlyStepMax);
    for (i = 0; i < trafficLinks.length;i += 1) {
      trafficLinks[i].parentNode.parentNode.className = '';
    }
    e.target.parentNode.parentNode.className = "active";
  }
  if (e.target.textContent === 'Daily') {
    createLineChart(dailyLabels, dailyData, dailyStepSize, dailyStepMax);
    for (i = 0; i < trafficLinks.length;i += 1) {
      trafficLinks[i].parentNode.parentNode.className = '';
    }
    e.target.parentNode.parentNode.className = "active";
  }
  if (e.target.textContent === 'Weekly') {
    createLineChart(weeklyLabels, weeklyData, weeklyStepSize, weeklyStepMax);
    for (i = 0; i < trafficLinks.length;i += 1) {
      trafficLinks[i].parentNode.parentNode.className = '';
    }
    e.target.parentNode.parentNode.className = "active";
  }
  if (e.target.textContent === 'Monthly') {
    createLineChart(monthlyLabels, monthlyData, monthlyStepSize, monthlyStepMax);
    for (i = 0; i < trafficLinks.length;i += 1) {
      trafficLinks[i].parentNode.parentNode.className = '';
    }
    e.target.parentNode.parentNode.className = "active";
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
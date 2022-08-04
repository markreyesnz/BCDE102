let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['WEBB, Duncan Alexander [Labour Party]', 'WAGNER, Nicola Joanne [National Party]', 'RICHARDSON, Peter Ian [Green Party]', 'ROBINSON, Philip John [New Zealand First Party]', 
'HILL, Douglas MacMillan [The Opportunities Party (TOP)]', 'HERBERT-SHUFFLEBOTHAM, Janine Anne [Aotearoa Legalise Cannabis Party]', 'GASKIN, Ian Camden [United Future]'];
let colorHex = ['#D82A20', '#00529F', '#098137', '#000000', '#00FFB6', '#33CC33', '#501557'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [16631, 13760, 1957, 1091, 879, 304, 80],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})
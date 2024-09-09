// Dummy data for the sales chart
const salesChart = document.getElementById('salesChart').getContext('2d');
const myChart = new Chart(salesChart, {
    type: 'line',
    data: {
        labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
        datasets: [{
            label: 'Sales',
            data: [20, 35, 40, 65, 60, 50, 35, 60, 40, 55, 30, 20],
            borderColor: '#2b2e4a',
            fill: true,
            backgroundColor: 'rgba(43, 46, 74, 0.2)',
            pointBackgroundColor: '#2b2e4a',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

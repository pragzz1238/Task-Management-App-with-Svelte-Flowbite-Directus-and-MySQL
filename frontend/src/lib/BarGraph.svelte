<script>
    import { onMount } from 'svelte';
    import ApexCharts from 'apexcharts';
    import { Card } from 'flowbite-svelte';

    export let tasks;

    let taskCounts = {
      '<1 day': 0,
      '1-3 days': 0,
      '4-7 days': 0,
      '8-14 days': 0,
      '15-30 days': 0,
      '>30 days': 0
    };

    tasks.forEach(task => {
      const dueDate = new Date(task.due_date);
      const daysDifference = Math.ceil((dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

      if (daysDifference < 1) {
        taskCounts['<1 day'] += 1;
      } else if (daysDifference >= 1 && daysDifference <= 3) {
        taskCounts['1-3 days'] += 1;
      } else if (daysDifference >= 4 && daysDifference <= 7) {
        taskCounts['4-7 days'] += 1;
      } else if (daysDifference >= 8 && daysDifference <= 14) {
        taskCounts['8-14 days'] += 1;
      } else if (daysDifference >= 15 && daysDifference <= 30) {
        taskCounts['15-30 days'] += 1;
      } else {
        taskCounts['>30 days'] += 1;
      }
    });

    let chartOptions = {
      series: [
        {
          name: 'Tasks',
          data: Object.values(taskCounts)
        }
      ],
      chart: {
        type: 'bar',
        width: '100%',
        height: 270,
        toolbar: {
          show: false
        }
      },
      fill: {
        opacity: 1
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '100%',
          borderRadius: 6,
          dataLabels: {
            position: 'top'
          },
          colors: {
            ranges: [
              { from: 0, to: 5, color: '#1c64f2' },
              { from: 6, to: 10, color: '#fac19b' },
              { from: 11, to: 15, color: '#35c4cf' },
              { from: 16, to: 20, color: '#fac19b' },
              { from: 21, to: 25, color: '#1c64f2' },
              { from: 26, to: 30, color: '#d03801' }
            ]
          }
        }
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        labels: {
          show: false,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          formatter: function (value) {
            return value + ' days';
          }
        },
        categories: ['<1 day', '1-3 days', '4-7 days', '8-14 days', '15-30 days', '>30 days'],
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        }
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -20
        }
      }
    };

    onMount(() => {
      let chart = new ApexCharts(document.querySelector('#chart'), chartOptions);
      chart.render();
    });
</script>

<Card class="shadow-lg rounded-lg overflow-hidden bg-gradient-to-r dark:from-gray-800 dark:to-gray-900">
  <div class="grid py-3 px-4">
    <dl>
      <dd class="leading-none text-xl font-bold text-orange-400 dark:text-yellow-200">Pending Due Tasks</dd>
    </dl>
  </div>

  <div class="px-4">
    <div id="chart"></div>  <!-- Container for ApexCharts -->
  </div>
</Card>

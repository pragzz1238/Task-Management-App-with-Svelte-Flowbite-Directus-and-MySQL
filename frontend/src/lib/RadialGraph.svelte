<script lang="ts">
    import { Chart, Card, A, Button, Dropdown, DropdownItem, Popover, Tooltip } from 'flowbite-svelte';
    import { InfoCircleSolid, ArrowDownToBracketOutline, ChevronDownOutline, ChevronRightOutline, PenSolid, DownloadSolid, ShareNodesSolid } from 'flowbite-svelte-icons';
    import type { ApexOptions } from 'apexcharts';
    let isOpen = false;
    export let tasks = [];

    function getTaskCounts() {
        const counts = { 'to-do': 0, 'in-progress': 0, 'done': 0 };
        tasks.forEach(task => {
            if (counts.hasOwnProperty(task.status)) {
                counts[task.status]++;
            }
        });
        return counts;
    }

    const taskCounts = getTaskCounts();

    // Chart options
    const options: ApexOptions = {
        series: [taskCounts['done'], taskCounts['in-progress'], taskCounts['to-do']],
        colors: ['#1C64F2', '#16BDCA', '#FDBA8C'],
        chart: {
            height: '250px',
            width: '100%',
            type: 'radialBar' as const,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                track: {
                    background: '#E5E7EB'
                },
                dataLabels: {
                    show: false
                },
                hollow: {
                    margin: 0,
                    size: '25%'
                }
            }
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -15,
                bottom: -10
            }
        },
        labels: ['Done', 'In progress', 'To do'],
        legend: {
            show: true,
            position: 'bottom',
            fontFamily: 'Inter, sans-serif',
        },
        tooltip: {
            enabled: true,
            x: {
                show: false
            }
        },
        yaxis: {
            show: false,
            labels: {
                formatter: function (value) {
                    return value + '%';
                }
            }
        }
    };
</script>

<Card class="p-3">
    <div class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
        <div class="grid grid-cols-3 gap-2 mb-2">
            <dl class="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[60px]">
                <dt class="w-6 h-6 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-xs font-medium flex items-center justify-center mb-1">
                    {taskCounts['to-do']}
                </dt>
                <dd class="text-orange-600 dark:text-orange-300 text-xs font-medium">To do</dd>
            </dl>
            <dl class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[60px]">
                <dt class="w-6 h-6 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-xs font-medium flex items-center justify-center mb-1">
                    {taskCounts['in-progress']}
                </dt>
                <dd class="text-teal-600 dark:text-teal-300 text-xs font-medium">In progress</dd>
            </dl>
            <dl class="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[60px]">
                <dt class="w-6 h-6 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-xs font-medium flex items-center justify-center mb-1">
                    {taskCounts['done']}
                </dt>
                <dd class="text-blue-600 dark:text-blue-300 text-xs font-medium">Done</dd>
            </dl>
        </div>
        <button on:click={() => (isOpen = !isOpen)} type="button" class="hover:underline text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center">
            Show more details <ChevronDownOutline class="w-3 h-3 ms-1" />
        </button>
        {#if isOpen}
            <div id="more-details" class="border-gray-200 border-t dark:border-gray-600 pt-2 mt-2 space-y-1">
                <dl class="flex items-center justify-between">
                    <dt class="text-gray-500 dark:text-gray-400 text-xs font-normal">Average task completion rate:</dt>
                    <dd class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                        <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg> 57%
                    </dd>
                </dl>
                <dl class="flex items-center justify-between">
                    <dt class="text-gray-500 dark:text-gray-400 text-xs font-normal">Days until sprint ends:</dt>
                    <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">13 days</dd>
                </dl>
                <dl class="flex items-center justify-between">
                    <dt class="text-gray-500 dark:text-gray-400 text-xs font-normal">Next meeting:</dt>
                    <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">Thursday</dd>
                </dl>
            </div>
        {/if}
    </div>

    <Chart {options} class="py-4" />
</Card>
<script>
    export let task;
    export let handleDeleteTask;
    export let handleEditTask;
    import { Button } from 'flowbite-svelte';
  
    function getStatusColor(status) {
      switch (status) {
        case "in-progress":
          return "bg-yellow-500";
        case "to-do":
          return "bg-red-600";
        case "done":
          return "bg-green-500";
        default:
          return "bg-gray-500";
      }
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString();  
    }
  
    let isRelevantStatus = task.status === "in-progress" || task.status === "to-do";
  </script>
  
  <style>
    .fixed-width-title {
      width: 200px; /* Adjust as needed */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  
    .fixed-width-description {
      width: 300px; /* Adjust as needed */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  </style>
  
  {#if isRelevantStatus}
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class={`inline-block w-3 h-3 rounded-full ${getStatusColor(task.status)}`}></span>
        <span class="text-gray-500">{task.status.toUpperCase() || 'No Status'}</span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white fixed-width-title">
        {task.title}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 fixed-width-description">
        {task.description}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 fixed-width-description">
        {formatDate(task.due_date)}
    </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <Button on:click={() => handleEditTask(task.id)} color="yellow" outline class="dark:text-white">Edit</Button>
        <Button on:click={() => handleDeleteTask(task.id)} color="red">Delete</Button>
      </td>
    </tr>
  {/if}
  
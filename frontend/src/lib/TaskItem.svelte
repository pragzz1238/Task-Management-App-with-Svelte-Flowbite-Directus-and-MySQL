<script>
    export let task;
    export let handleDeleteTask;
    export let handleEditTask;
    import { Card, Button } from 'flowbite-svelte';

    console.log(task.status);

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

  </script>
  

  <Card padding="md" class="shadow-lg rounded-lg border dark:border-gray-700">
    <div class="flex items-center space-x-2">
      <span class={`inline-block w-3 h-3 rounded-full ${getStatusColor(task.status)}`}></span>
      <span class="text-gray-500">{ task.status.toUpperCase() || 'No Status'}</span>
    </div>
    <div class="flex flex-col mt-8 pb-4">
      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {task.title}
      </h5>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {task.description}
      </p>
      <h6 class="mb-2 text-l font-semibold tracking-tight text-gray-900 dark:text-white">
        Due Date: {formatDate(task.due_date)}
      </h6>      
      <div class="flex mt-4 space-x-3 rtl:space-x-reverse lg:mt-6">
        <Button on:click={() => handleEditTask(task.id)} color="yellow" outline class="dark:text-white">Edit</Button>
        <Button on:click={() => handleDeleteTask(task.id)} color="red">Delete</Button>
      </div>
    </div>
  </Card>
  
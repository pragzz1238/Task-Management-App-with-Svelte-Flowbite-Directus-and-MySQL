<script>
    import TaskItem from './TaskItem.svelte'; 
    export let tasks = [];
    export let handleDeleteTask;
    export let handleEditTask;
  </script>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each tasks as task}
      <TaskItem {task} {handleDeleteTask} {handleEditTask} />
    {/each}
  </div>
  
  <style>
    .grid {
      display: grid;
      gap: 1rem; /* Adjust gap between grid items as needed */
    }
  </style>
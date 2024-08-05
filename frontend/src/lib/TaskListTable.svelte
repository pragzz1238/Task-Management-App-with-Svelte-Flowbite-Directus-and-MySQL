<script>
    import TaskTable from './TaskTable.svelte'; 
    export let tasks = [];
    export let handleDeleteTask;
    export let handleEditTask;
</script>

<style>
  table {
    table-layout: fixed;
    width: 100%;
  }

  .status-column {
    width: 100px; 
  }

  .actions-column {
    width: 150px; 
  }

  .title-column {
    width: 200px; 
    overflow-wrap: break-word;
  }

  .description-column {
    width: 300px; 
    overflow-wrap: break-word;
  }
  .duedate-column {
    width: 100px; 
  }
</style>

<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead class="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider status-column">
        Status
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider title-column">
        Title
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider description-column">
        Description
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider duedate-column">
        Due Date
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider actions-column">
        Actions
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
    {#each tasks as task}
      <TaskTable {task} {handleDeleteTask} {handleEditTask} />
    {/each}
  </tbody>
</table>

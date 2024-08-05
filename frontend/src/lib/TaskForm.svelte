<script>
  
  export let newTask = { title: '', description: '', status: 'to-do', due_date: '' };
  export let handleAddTask;
  export let handleEditTask;
  export let isEditing = false;


  function TestData(event) {
  event.preventDefault();
  if (isEditing) {
    handleEditTask(newTask.id,newTask);
  } else {
    handleAddTask();
  }
  
}
function handleSubmit(event) {
    event.preventDefault();
    handleAddTask(newTask.id,newTask); 
  }
</script>

{#if isEditing}
  <!-- Edit Task Form -->
<form on:submit|preventDefault={handleSubmit} class="space-y-6 p-6 bg-white rounded-lg w-full max-w-lg">
  <h2 class="text-2xl font-bold mb-4 text-gray-800">Edit Task</h2>

  <div class="flex flex-col space-y-4">
    <label for="task-status-edit" class="text-sm font-medium text-gray-700">Status:</label>
    <select id="task-status-edit" bind:value={newTask.status} class="border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
      <option value="to-do">To Do</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
    </select>
  </div>

  <div class="flex justify-end space-x-4">
    <button type="submit" class="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">Update Task</button>
  </div>
</form>

{:else}
  <!-- Add New Task Form -->
  <form on:submit|preventDefault={handleSubmit} class="space-y-6 p-6 bg-white rounded-lg w-full max-w-lg">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Add New Task</h2>

    <div class="flex flex-col space-y-4">
      <label for="task-title-add" class="text-sm font-medium text-gray-700">Title:</label>
      <input id="task-title-add" type="text" bind:value={newTask.title} class="border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required />
    </div>

    <div class="flex flex-col space-y-4">
      <label for="task-description-add" class="text-sm font-medium text-gray-700">Description:</label>
      <textarea id="task-description-add" bind:value={newTask.description} class="border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-200" rows="4"></textarea>
    </div>

    <div class="flex space-x-4">
      <div class="flex-1 flex flex-col space-y-4">
        <label for="task-status-add" class="text-sm font-medium text-gray-700">Status:</label>
        <select id="task-status-add" bind:value={newTask.status} class="border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
          <option value="to-do">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div class="flex-1 flex flex-col space-y-4">
        <label for="task-due-date-add" class="text-sm font-medium text-gray-700">Due Date:</label>
        <input id="task-due-date-add" type="datetime-local" bind:value={newTask.due_date} class="border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-200" />
      </div>
    </div>

    <div class="flex justify-end space-x-4">
      <button type="submit" class="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">Add Task</button>
    </div>
  </form>
{/if}

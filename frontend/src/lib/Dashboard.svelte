<script>
  import TaskForm from "./TaskForm.svelte";
  import TaskList from "./TaskList.svelte";
  import Navbar from "./Navbar.svelte";
  import { isAuthenticated, logout } from "../config/auth";
  import { onMount } from "svelte";

  let tasks = [];
  let loading = true;
  let isEditing = false;
  let editingTask = null;
  let editingStatus = null
  let showModal = false;

  let newTask = {
    title: "",
    description: "",
    status: "to-do",
    due_date: "",
  };

  onMount(async () => {
    if (!isAuthenticated()) {
      window.location.href = "/";
      return;
    }

    await fetchTasks();
    await fetchUserData();
  });

  async function fetchUserData() {
    try {
      const response = await fetch(`http://localhost:8055/users/me`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      sessionStorage.setItem("username", `${data.data.first_name} ${data.data.last_name}`);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  }

  async function fetchTasks() {
    try {
      const response = await fetch("http://localhost:8055/items/tasks", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        tasks = data.data || [];
      } else {
        console.error(
          "Failed to fetch tasks",
          response.status,
          response.statusText
        );
        tasks = [];
      }
    } catch (error) {
      console.error("Error fetching tasks", error);
      tasks = [];
    } finally {
      loading = false;
    }
  }

  function handleEditTask(taskId,TaskForm) {
    isEditing = true;
    editingTask = tasks.find((task) => task.id === taskId);
    newTask = { ...editingTask };
    console.log(newTask)
    showModal = true;

  }

  function resetEditing() {
    isEditing = false;
    editingTask = null;
    newTask = { title: "", description: "", status: "to-do", due_date: "" };
  }

  async function handleAddTask(taskId,editForm) {
    if (isEditing) {
      console.log("is edit called");
      editingTask = tasks.find((task) => task.id === taskId);
      newTask = {...editingTask};
      console.log("EditForm is called",editForm);
      await updateTask(editForm);
    } else {
      console.log("addtask called.")
      await addTask();
    }
    showModal = false;
  }

  async function addTask() {
    try {
      const response = await fetch("http://localhost:8055/items/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const data = await response.json();
        tasks = [...tasks, data.data];
        resetEditing();
      } else {
        console.error(
          "Failed to add task",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error adding task", error);
    }
  }

  async function updateTask(editForm) {
    console.log("updateTask is called",editForm);
    try {
      const response = await fetch(
        `http://localhost:8055/items/tasks/${editForm.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          body: JSON.stringify(editForm),
        }
      );

      if (response.ok) {
        const data = await response.json();
        tasks = tasks.map((task) =>
          task.id === newTask.id ? data.data : task
        );
        resetEditing();
      } else {
        console.error(
          "Failed to update task",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error updating task", error);
    }
  }

  async function handleDeleteTask(taskId) {
    try {
      const response = await fetch(
        `http://localhost:8055/items/tasks/${taskId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        tasks = tasks.filter((task) => task.id !== taskId);
      } else {
        console.error(
          "Failed to delete task",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error deleting task", error);
    }
  }

  async function handleLogout() {
    await logout();
    window.location.href = "/";
  }
</script>

<main class="bg-gray-200 min-h-screen">
  <Navbar {handleLogout} />
  {#if loading}
    <p class="text-center text-lg">Loading...</p>
  {:else}
    <div class="max-w-5xl mx-auto mt-10">
      <div class="flex justify-end mb-6">
        <button
          class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          on:click={() => (showModal = true)}
        >
          + Add Task
        </button>
      </div>
      <div class="flex flex-col space-y-6 mb-8">
        <TaskList {tasks} {handleDeleteTask} {handleEditTask} />
      </div>
    </div>
  {/if}

  {#if showModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-background">
      <div class="bg-white rounded-lg shadow-lg p-6 w-[500px] relative">
        <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" on:click={() => (showModal = false)}>
          &times;
        </button>
        <TaskForm {newTask} {handleAddTask} {handleEditTask} {isEditing} />
        <button class="absolute bottom-4 left-4 text-red-500 hover:text-red-700" on:click={() => (showModal = false)}>
        </button>
      </div>
    </div>
  {/if}
</main>

<style>
  .modal-background {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>

<script>
import "./app.css";
import Router from "svelte-spa-router";
import Login from "./lib/Login.svelte";
import Dashboard from "./lib/Dashboard.svelte"; 
import AddTask from "./lib/AddTask.svelte";
import DueTask from "./lib/PendingTasks.svelte";
import CompletedTasks from "./lib/CompletedTasks.svelte";
const routes = {
  '/':Login,
  '/dashboard':Dashboard,
  '/tasks':AddTask,
  '/pendingTasks':DueTask,
  '/completedTasks':CompletedTasks,
}</script>

<main>
  <Router {routes}></Router>
</main>

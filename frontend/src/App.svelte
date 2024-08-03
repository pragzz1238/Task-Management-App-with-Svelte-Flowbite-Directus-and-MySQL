<script>
import "./app.css";
import Router from "svelte-spa-router";
import Login from "./lib/Login.svelte";
import Dashboard from "./lib/Dashboard.svelte"; 
import Navbar from "./lib/Navbar.svelte";

const routes = {
  '/':Login,
  '/dashboard':Dashboard,
}</script>

<main>
  <Router {routes}></Router>
</main>

<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
  import "../app.css";
  import { login } from "../config/auth";
  import {push} from 'svelte-spa-router'

  let email = "";
  let password = "";
  let errorMessage = "";

  async function handleSubmit(event) {
    event.preventDefault();
    const success = await login(email, password);
    if (success) {
      sessionStorage.setItem('userEmail',email);
      push('/dashboard');
    } else {
      errorMessage = "Login failed. Please check your credentials.";
    }
  }
</script>

<div class="flex items-center justify-center min-h-screen">
  <Card>
    <form class="flex flex-col space-y-6" on:submit={handleSubmit}>
      <h3 class="text-xl font-medium text-gray-900 dark:text-white">
        Sign in to our TrackTask App
      </h3>
      <Label class="space-y-2">
        <span>Email</span>
        <Input
          type="email"
          bind:value={email}
          placeholder="yourname@gmail.com"
          required
        />
      </Label>
      <Label class="space-y-2">
        <span>Your password</span>
        <Input
          type="password"
          bind:value={password}
          placeholder="•••••••"
          required
        />
      </Label>
      <!-- <div class="flex items-start">
        <Checkbox>Remember me</Checkbox>
        <a
          href="/"
          class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
          >Lost password?</a
        >
      </div> -->
      <Button type="submit" class="w-full hover:bg-primary-700 hover:text-white"
        >Login to your account</Button
      >
      {#if errorMessage}
        <p class="text-red-500">{errorMessage}</p>
      {/if}
      <!-- <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? <a
          href="/register"
          class="text-primary-700 hover:underline dark:text-primary-500"
          >Create account</a
        >
      </div> -->
    </form>
  </Card>
</div>

<style>
  .min-h-screen {
    min-height: 100vh;
  }
</style>

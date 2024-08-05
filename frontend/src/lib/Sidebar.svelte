<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
  import { ChartPieSolid, GridSolid, MailBoxSolid, EditOutline, BookSolid, LifeSaverSolid } from 'flowbite-svelte-icons';
    let spanClass = 'flex-1 ms-3 whitespace-nowrap';
    import { logout } from "../config/auth";

    let isDropDown=true;
     async function handleLogout() {
    await logout();
    window.location.href = "/";
  }
  </script>
  
  <Sidebar>
    <SidebarWrapper class="h-screen fixed mt-16 w-64 bg-gray-100 dark:bg-gray-800">
      <SidebarGroup>
        <SidebarItem href="#/dashboard" label="Dashboard" class="mt-25">
          <svelte:fragment slot="icon">
            <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <SidebarDropdownWrapper  label="Tasks" isOpen={isDropDown}>
            <svelte:fragment slot="icon">
              <GridSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
            <SidebarDropdownItem label="Add Task" href="#/tasks"/>
            <SidebarDropdownItem label="Due Tasks" href="#/pendingTasks" />
            <SidebarDropdownItem label="Completed Tasks" href="#/completedTasks"/>
          </SidebarDropdownWrapper>
        <!-- <SidebarItem label="Notifications" {spanClass} href="#/completedTasks" >
          <svelte:fragment slot="icon">
            <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
          </svelte:fragment>
        </SidebarItem>
         -->
      </SidebarGroup>
      <SidebarGroup border>
        <div class="mt-40"></div>
        <SidebarItem label="Documentation" href="https://docs.google.com/document/d/1Qi_enhhbSwvz8Y9sT7ZzBHy_yb7YmhH9/">
          <svelte:fragment slot="icon">
            <BookSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        
      </SidebarGroup>
      <SidebarGroup border>
        <SidebarItem on:click={handleLogout} label="Sign out">
          <svelte:fragment slot="icon">
            <EditOutline  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        
      </SidebarGroup>
    </SidebarWrapper>


  </Sidebar>

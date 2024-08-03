<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    export let handleLogout;

    const email = sessionStorage.getItem('userEmail');
    const username = sessionStorage.getItem('username');
    
  </script>
  
  <Navbar>
    <NavBrand href="/">
      <img src="/images/Logo.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TaskTrack</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
      <Avatar id="avatar-menu" src="/images/profile.png" class="cursor-pointer	" />
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm">{username}</span>
        <span class="block truncate text-sm font-medium">{email}</span>
      </DropdownHeader>
      <DropdownItem on:click={handleLogout}>Sign out</DropdownItem>
    </Dropdown>

  </Navbar>
<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader } from 'flowbite-svelte';
    import { BellActiveAltOutline } from 'flowbite-svelte-icons';

    export let handleLogout;
    export let tasks;

    const email = sessionStorage.getItem('userEmail');
    const username = sessionStorage.getItem('username');

</script>

<Navbar class="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
    <NavBrand href="/">
        <img src="/images/Logo.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TaskTrack</span>
    </NavBrand>
    <div class="flex items-center md:order-2 space-x-6 relative">
        
        <Avatar id="avatar-menu" src="/images/profile.png" class="cursor-pointer" />
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

<style>

/* Tooltip styling */
.group:hover .group-hover\:block {
  display: block;
  top:3rem;
}
</style>

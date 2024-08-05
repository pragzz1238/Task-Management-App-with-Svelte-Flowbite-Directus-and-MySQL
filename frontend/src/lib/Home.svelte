<script>
    import Radial from "./RadialGraph.svelte";
    import BarGraph from "./BarGraph.svelte";
    import TaskList from "./TaskList.svelte"; // Import TaskList component

    // Define props to be passed to TaskList
    export let tasks = [];
    export let handleDeleteTask;
    export let handleEditTask;
</script>

<div class="p-6 min-h-screen">
    <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row justify-evenly gap-6">
            <!-- Graphs Section -->
                <Radial {tasks}/>
                <BarGraph {tasks} />
        </div>
        
        <!-- Task List Section -->
        <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">List of Tasks</h2>
            <TaskList {tasks} {handleDeleteTask} {handleEditTask} />
        </div>
    </div>
</div>

<style>
    .flex {
        display: flex;
        flex-direction: row;
        gap: 1.5rem; /* Space between components */
    }
</style>

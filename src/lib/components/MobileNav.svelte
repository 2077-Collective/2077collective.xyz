<script lang="ts">
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import Hamburger from "./icons/Hamburger.svelte";

    let open = false;
</script>

<button class="lg:hidden cursor-pointer p-2" on:click={() => (open = !open)}>
    <Hamburger />
</button>

{#if open}
    <button
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        on:click={() => (open = false)}
    ></button>
    <div
        class="fixed inset-y-0 right-0 md:w-2/5 max-w-[60%] w-full bg-white dark:bg-gray shadow-lg z-50 overflow-y-auto flex flex-col p-4"
        transition:slide={{ duration: 300, easing: quintOut }}
    >
        <button
            class="self-end text-gray-700 p-2"
            on:click={() => (open = false)}>X</button
        >
        <ul class="flex flex-col gap-4">
            <li>
                <a
                    href="https://research.2077.xyz"
                    target="_blank"
                    class="flex items-center gap-2 active:font-bold"
                    rel="noopener noreferrer"
                >
                    <h3>Research</h3>
                </a>
            </li>
            <li>
                <a
                    href="https://eips.wiki"
                    target="_blank"
                    class="flex items-center gap-2 active:font-bold"
                    rel="noopener noreferrer"
                >
                    <h3>EIP Wiki</h3>
                </a>
            </li>
            <li>
                <a
					href="https://etherpedia.2077collective.xyz"
                    target="_blank"
                    class="flex items-center gap-2 active:font-bold"
                    rel="noopener noreferrer"
                >
                    <h3>Etherpedia</h3>
                </a>
            </li>
            <li>
                <a
                    href="/about"
                    class="flex items-center gap-2 active:font-bold"
                >
                    <h3>About us</h3>
                </a>
            </li>
            <li>
                <a
                    href="/values"
                    class="flex items-center gap-2 active:font-bold"
                >
                    <h3>Values</h3>
                </a>
            </li>
            <li>
                <a
                    href="/support"
                    class="flex items-center gap-2 active:text-red"
                >
                    <h3>Support us</h3>
                </a>
            </li>
        </ul>
    </div>
{/if}

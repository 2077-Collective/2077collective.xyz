<script>
    import { page } from "$app/stores";
    import Logo from "./icons/Logo.svelte";
    import Discord from "./icons/Discord.svelte";
    import Farcaster from "./icons/Farcaster.svelte";
    import Twitter from "./icons/Twitter.svelte";
    import MobileNav from "./MobileNav.svelte";
</script>

<header class="absolute left-0 right-0 px-6 lg:px-20">
    <div class="container mx-auto">
        <nav class="flex justify-between items-center py-6">
            <a href="/">
                <Logo />
            </a>

            <ul
                class="hidden lg:flex gap-x-6"
                class:text-white={$page.url.pathname === "/"}
                class:text-black={$page.url.pathname !== "/"}
            >
                <li>
                    <a href="https://research.2077.xyz" target="_blank" rel="noopener noreferrer"
                        >Research</a
                    >
                </li>
                <li>
                    <a href="https://eips.wiki" target="_blank" rel="noopener noreferrer">EIP Wiki</a>
                </li>
                <li>
					<a href="https://etherpedia.2077collective.xyz" target="_blank" rel="noopener noreferrer"
                        >Etherpedia</a
                    >
                </li>
                <li>
                    <a href="/about">About us</a>
                </li>
                <li>
                    <a href="/values">Values</a>
                </li>
                <li>
                    <a href="/support">Support us</a>
                </li>
            </ul>

            <ul class="hidden lg:flex gap-x-4">
                <li>
                    <a href="https://discord.gg/2077collective" target="_blank" rel="noopener noreferrer">
                        <Discord />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/2077Collective" target="_blank" rel="noopener noreferrer">
                        <Twitter />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.farcaster.id/c/2077collective"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <Farcaster />
                    </a>
                </li>
            </ul>
            <MobileNav />
        </nav>
    </div>
</header>

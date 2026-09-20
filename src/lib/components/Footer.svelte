<script>
    import FooterLogo from "./icons/FooterLogo.svelte";
</script>

<footer class="bg-black text-white p-20">
    <div class="container flex gap-20 justify-between flex-col-reverse md:flex-row">
        <div class="flex flex-col justify-between gap-2.5 h-[160px]">
            <a href="/">
                <FooterLogo />
            </a>

            <p>© 2077 Collective</p>
        </div>

        <div class="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-36">
            <div class="flex flex-col gap-4">
                <h3 class="opacity-50">2077</h3>
                <ul class="flex flex-col gap-2">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/values">Values</a></li>
                    <li><a href="/support">Support us</a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="opacity-50">Resources</h3>
                <ul class="flex flex-col gap-2">
					<li><a href="https://etherpedia.2077collective.xyz" target="_blank" rel="noopener noreferrer">Etherpedia</a></li>
                    <li><a href="https://eips.wiki" target="_blank" rel="noopener noreferrer">EIP wiki</a></li>
                    <li><a href="https://www.notion.so/Media-Kit-External-10428d0d3291805cad95f6003eba09bb">Assets</a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="opacity-50">Socials</h3>
                <ul class="flex flex-col gap-2">
                    <li><a href="https://discord.gg/2077collective" target="_blank" rel="noopener noreferrer">Discord</a></li>
                    <li><a href="https://x.com/2077Collective" target="_blank" rel="noopener noreferrer">X</a></li>
                    <li><a href="https://www.farcaster.id/c/2077collective" target="_blank" rel="noopener noreferrer">Farcaster</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

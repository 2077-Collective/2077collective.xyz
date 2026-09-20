<script lang="ts">
    import Eth from "../lib/components/icons/Eth.svelte";
    import BulletPoint from "../lib/components/icons/BulletPoint.svelte";
    import Explore from "../lib/components/icons/Explore.svelte";
    import Visit from "../lib/components/icons/Visit.svelte";
    import Discord from "../lib/components/icons/Discord.svelte";
    import Farcaster from "../lib/components/icons/Farcaster.svelte";
    import Twitter from "../lib/components/icons/Twitter.svelte";
    import Abcde from "../lib/components/icons/Abcde.svelte";
    import Azuki from "../lib/components/logos/Azuki.svelte";
    import Fuellabs from "../lib/components/logos/Fuellabs.svelte";
    import Lightso from "../lib/components/logos/Lightso.svelte";
    import Metalex from "../lib/components/logos/Metalex.svelte";
    import Starknet from "../lib/components/logos/Starknet.svelte";
    import Therollup from "../lib/components/logos/Therollup.svelte";
    import Eigenlayer from "$lib/components/logos/Eigenlayer.svelte";
    import Megaeth from "$lib/components/logos/Megaeth.svelte";
    import Spire from "../lib/components/logos/Spire.svelte";
    import ModularMedia from "../lib/components/logos/ModularMedia.svelte";
    import Ternoa from "../lib/components/logos/Ternoa.svelte";

    const supporterImages = [
        {
            component: Eigenlayer,
            alt: "eigenlayer",
            link: "https://eigenlayer.xyz",
        },
        { component: Megaeth, alt: "megaeth", link: "https://megaeth.systems" },
        {
            imageSrc: "/Vitalik.webp",
            alt: "Vitalik",
            link: "https://vitalik.eth.limo/",
        },
        { component: Spire, alt: "spire", link: "https://spire.dev" },
        {
            imageSrc: "/bo-du.webp",
            alt: "bo-du",
            link: "https://x.com/0xshake",
            darkBackground: true,
        },
        { component: Abcde, alt: "abcde", link: "https://www.abcde.com/" },
        {
            component: Metalex,
            alt: "metalex",
            link: "https://www.metalex.tech/",
        },
        { imageSrc: "/johannes.webp", alt: "johannes" },
        {
            component: Starknet,
            alt: "starknet",
            link: "https://www.starknet.io/",
        },
        {
            imageSrc: "/james-young.webp",
            alt: "james-young",
            link: "https://x.com/jamesyoung",
            darkBackground: true,
        },
        { component: Azuki, alt: "azuki", link: "https://www.azuki.com/" },
        {
            component: Fuellabs,
            alt: "fuel-labs",
            link: "https://fuel.network",
        },
        {
            component: Lightso,
            alt: "Lightso",
            link: "https://light.so/home",
        },
        {
            imageSrc: "/dankrad.webp",
            alt: "dankrad",
            link: "https://x.com/dankrad",
        },
        {
            component: Therollup,
            alt: "therollup",
            link: "https://therollup.co",
        },
        {
            imageSrc: "/wei-dai.webp",
            alt: "wei-dai",
            link: "https://x.com/_weidai",
            darkBackground: true,
        },
        { component: Ternoa, alt: "ternoa", link: "https://www.ternoa.network/" },
        { component: ModularMedia, alt: "modular-media", link: "https://x.com/modularmedia_" },
        {
            imageSrc: "/defi-dave.webp",
            alt: "defi-dave",
            link: "https://x.com/DeFiDave22",
        },
        {
            imageSrc: "/shunkakinoki.webp",
            alt: "shunkakinoki",
            link: "https://x.com/shunkakinoki",
            darkBackground: true,
        },
    ];
</script>

<section class="hero px-6 lg:px-20 min-h-screen">
    <div class="container pt-24">
        <div class="flex flex-col gap-6 pt-20">
            <h1 class="text-white font-bold text-5xl lg:text-8xl pb-12">
                We are the <br /> 2077 Collective.
            </h1>

            <div>
                <p class=" font-medium text-xl text-gray-lightest">
                    Nosotros somos el Colectivo 2077.
                </p>
                <p class=" font-medium text-xl text-gray-lighter">
                    Wir sind das 2077 Kollektiv.
                </p>
                <p class=" font-medium text-xl text-gray-light">
                    我们是 2077 集体。
                </p>
                <p class=" font-medium text-xl text-gray-dark">
                    Мы Коллектив 2077.
                </p>
                <p class=" font-medium text-xl text-gray-darker">
                    نحن مجموعة 2077.
                </p>
            </div>
        </div>
        <div class="pt-24 pb-12 md:pt-48 text-white">
            <p class="text-3xl font-semibold max-w-[680px]">
                We are creatives, researchers, marketers, and developers all
                working to make <span class="inline-block"><Eth /></span>
                Ethereum
                <s>cool</s> again.
            </p>
        </div>
    </div>
</section>

<section class="px-6 lg:px-20 pt-12 pb-8">
    <div class="container">
        <div
            class="border-b border-gray-500 py-16 flex flex-col gap-y-4 lg:flex-row lg:gap-y-4 lg:justify-between"
        >
            <h2 class="flex items-center text-6xl font-semibold tracking-tight">
                <span class="pr-4"><BulletPoint /></span> Beliefs
            </h2>
            <p class="text-2xl max-w-screen-3xl">
                Crypto has the potential to give people across the world almost
                unimaginable levels of freedom and autonomy.
            </p>
        </div>
        <div
            class="border-b border-gray-500 py-16 flex flex-col gap-y-4 lg:flex-row lg:justify-between"
        >
            <h2
                class="flex items-center text-6xl font-semibold tracking-tight pb-4"
            >
                <span class="pr-4"><BulletPoint /></span> Vision
            </h2>
            <p class="text-2xl max-w-screen-3xl">
                We envision a world where everyone has individual sovereignty,
                economic freedom and ownership of the infrastructure that
                supports them.
            </p>
        </div>
        <div
            class="border-b border-gray-500 py-16 flex flex-col gap-y-4 lg:flex-row lg:justify-between"
        >
            <h2
                class="flex items-center text-6xl font-semibold tracking-tight pb-4"
            >
                <span class="pr-4"><BulletPoint /></span> Mission
            </h2>
            <p class="text-2xl max-w-screen-3xl">
                Accelerate Ethereum adoption, because for this vision to
                materialize, crypto must be built on a truly decentralized and
                permissionless base layer.
            </p>
        </div>
    </div>
</section>

<section class="flex flex-col gap-y-16 px-6 lg:px-20 pt-12 py-16">
    <div class="container flex flex-col gap-y-20">
        <div class=" flex flex-col gap-y-16">
            <p class="text-3xl font-semibold">
                Solving Ethereum's biggest problem
            </p>
            <h2 class="text-5xl lg:text-8xl font-bold">
                Lack of <br /> Marketing
            </h2>
        </div>

        <div class="grid gap-y-16">
            <div>
                <p class="text-2xl max-w-screen-3xl">
                    There's an established community of researchers and
                    developers focused on building and scaling Ethereum, but
                    there's no unified community focused on promoting it.
                    Independent marketing projects at the L2 or
                    dapp/infrastructure layer—while net positive and beneficial
                    for Ethereum—tend to be self-interested and ultimately
                    focused on one specific (albeit important) piece of the
                    puzzle they have an interest in.
                </p>
            </div>

            <div>
                <h3 class=" font-semibold text-2xl pb-4">
                    A (visible) narrative vacuum
                </h3>
                <p class="text-2xl max-w-screen-3xl">
                    The people whose voices really matter—core developers,
                    researchers, builders—are often quiet. The empty space is
                    filled with competitor noise, which is often intellectually
                    dishonest. This shapes the world's view of Ethereum without
                    anyone to credibly counteract the psyops, dispel
                    misinformation, and proactively share good narratives about
                    Ethereum with the world.
                </p>
            </div>

            <div>
                <h3 class=" font-semibold text-2xl pb-4">
                    Focus on the wrong things
                </h3>
                <p class="text-2xl max-w-screen-3xl">
                    Too much of the Ethereum community's energy is spent in
                    tribal arguments on crypto-Twitter, or talking to other
                    crypto natives. Having circular arguments about the
                    investment case or esoteric technical debates is not useful
                    after a point. For most people, energy is better spent
                    showing the world what users can do with Ethereum right now
                    and getting people on-chain.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="flex flex-col gap-y-16 px-6 lg:px-20 pt-24 pb-44">
    <div class="container">
        <div class="lg:flex lg:justify-center">
            <h2 class=" font-bold text-5xl lg:text-7xl max-w-screen-2xl pb-16">
                We are Ethernauts making Ethereum <s>cool</s> again and solving ETH's
                marketing problem.
            </h2>
            <div class="">
                <img src="/ethernaut.webp" alt="" width="420" height="420" />
                <p class="text-gray-light pt-2">
                    An unedited photograph of an Ethernaut
                </p>
            </div>
        </div>
    </div>
</section>

<section class="bg-gray px-6 lg:px-20 py-32">
    <div class="container flex flex-col gap-y-20">
        <div class="flex flex-col gap-y-4">
            <div class="flex gap-x-6 items-center">
                <div class="bg-green inline-block h-12 w-6"></div>
                <h2 class="text-6xl font-ibm font-semibold">EIP-2077</h2>
            </div>
            <p class="text-3xl max-w-[1080px]">
                The 2077 Collective has authored <strong
                    >EIP-2077: Ethereum Marketing Department</strong
                > to prescribe a strategy for marketing the Ethereum brand online
                and IRL. EIP-2077 provides a blueprint that guides 2077 Collective's
                marketing efforts:
            </p>
        </div>

        <div class="grid lg:grid-cols-2">
            <div
                class="bg-white border border-black p-10 flex flex-col gap-y-6"
            >
                <p
                    class="font-ibm font-semibold bg-black text-white w-8 rounded-full h-8 text-xl flex justify-center items-center"
                >
                    1
                </p>
                <p class=" font-semibold text-2xl">Fill the gap</p>
                <p class="text-2xl">
                    Establish consensus on core marketing problems, create
                    public good infrastructure to tackle marketing problems, and
                    forge relationships between builders and marketers.
                </p>
            </div>
            <div
                class="bg-white border border-black border-y-0 p-10 flex flex-col gap-y-6 lg:border lg:border-s-0"
            >
                <p
                    class="font-ibm font-semibold border border-black w-8 rounded-full h-8 text-xl flex justify-center items-center"
                >
                    2
                </p>
                <p class=" font-semibold text-2xl">Control the Narrative</p>
                <p class="text-2xl text-[#0B0B0B]">
                    Ethpill newcomers, defend Ethereum from FUD + psyops, and
                    amplify the voices of protocol devs, researchers, and
                    builders.
                </p>
            </div>
            <div
                class="bg-white border border-black p-10 flex flex-col gap-y-6 lg:border-t-0"
            >
                <p
                    class="font-ibm font-semibold border border-black w-8 rounded-full h-8 text-xl flex justify-center items-center"
                >
                    3
                </p>
                <p class=" font-semibold text-2xl">Correct the focus</p>
                <p class="text-2xl">
                    Bring more people on-chain, increase % of builders in the
                    Ethereum ecosystem, and create tools + resources to onboard
                    users/devs.
                </p>
            </div>
            <div
                class="bg-white border border-black border-t-0 p-10 flex flex-col gap-y-6 lg:border-s-0"
            >
                <p
                    class="font-ibm font-semibold border border-black w-8 rounded-full h-8 text-xl flex justify-center items-center"
                >
                    4
                </p>
                <p class=" font-semibold text-2xl">Promote the ecosystem</p>
                <p class="text-2xl text-gray-950">
                    Increase mindshare, adoption, and investment in Ethereum
                    through coordinated marketing efforts in the ecosystem and
                    educate users, builders, and businesses about Ethereum
                    L1/L2s.
                </p>
            </div>
        </div>

        <div class="text-center">
            <a
                class="inline-flex gap-x-2 items-center bg-green hover:bg-green-dark py-4 px-4 md:px-6 rounded-full text-base font-medium"
                href="https://eip2077.info"
                >Explore EIP-2077 <span class="inline-block"><Explore /></span
                ></a
            >
        </div>
    </div>
</section>

<section class="flex flex-col px-6 lg:px-20 gap-y-12 pt-16 pb-20">
    <div class="container flex flex-col gap-y-12">
        <div class="flex flex-col gap-y-4">
            <h2 class="text-6xl font-medium">
                Inde<span class="font-keania">x</span>
            </h2>
            <p class=" text-2xl">
                Recent work that has been put out by the collective.
            </p>
        </div>

        <div
            class="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8 lg:justify-center"
        >
            <div class="bg-black p-10 flex flex-col gap-y-6 flex-grow">
                <p class="text-white text-3xl font-semibold">Website</p>
                <img
                    src="/globe.webp"
                    alt="globe"
                    loading="lazy"
                    width="840"
                    height="840"
                />

                <p class="text-white text-xl font-medium max-w-screen-3xl">
                    See the geographical distribution of Ethereum validators in
                    real-time. A visual experience with in-depth metrics and
                    statistics.
                </p>
                <div>
                    <a
                        class="inline-flex gap-x-2 items-center bg-green hover:bg-green-dark py-4 px-4 md:px-6 rounded-full text-base font-medium"
						href="https://etherpedia.2077collective.xyz" target="_blank" rel="noopener noreferrer"
						>etherpedia.2077collective.xyz <span class="inline-block"
                            ><Explore /></span
                        ></a
                    >
                </div>
            </div>

            <div class="flex flex-col gap-y-8 flex-grow">
                <div class="bg-black p-10 flex flex-col gap-y-6 flex-grow">
                    <p class="text-white text-3xl font-semibold">
                        Research hub
                    </p>
                    <img
                        src="/globe1.webp"
                        alt="globe"
                        loading="lazy"
                        width="570"
                        height="248"
                    />
                    <div>
                        <p class="text-white text-xl font-medium max-w-96">
                            Deep dives and technical analyses on Ethereum
                            infrastructure, protocols, and applications
                        </p>
                    </div>
                    <div>
                        <a
                            class="inline-flex gap-x-2 items-center bg-green hover:bg-green-dark py-4 px-6 rounded-full text-base font-medium"
                            href="https://research.2077.xyz" target="_blank" rel="noopener noreferrer"
                            >research.2077.xyz <span class="inline-block"
                                ><Explore /></span
                            ></a
                        >
                    </div>
                </div>
                <div class="bg-black p-10 flex flex-col gap-y-6 flex-grow">
                    <p class="text-white text-3xl font-semibold">EIP Wiki</p>
                    <img
                        src="/globe1.webp"
                        alt="globe"
                        loading="lazy"
                        width="570"
                        height="248"
                    />
                    <p class="text-white text-xl font-medium max-w-96">
                        The ultimate resource on Ethereum Improvement Proposals
                        (EIPs) for research nerds.
                    </p>
                    <div>
                        <a
                            class="inline-flex gap-x-2 items-center bg-green hover:bg-green-dark py-4 px-6 rounded-full text-base font-medium"
                            href="https://eips.wiki" target="_blank" rel="noopener noreferrer"
                            >eips.wiki <span class="inline-block"
                                ><Explore /></span
                            ></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section
    class="banner flex flex-col gap-y-16 justify-center items-center px-6 lg:px-20 py-16"
>
    <div
        class="container min-h-[633px] flex gap-24 flex-col lg:flex-row lg:gap-28 justify-between items-center"
    >
        <div>
            <img src="coin.webp" alt="" width="363" height="298" />
        </div>
        <div class="flex flex-col gap-y-12">
            <div class="flex flex-col gap-y-6 text-center lg:text-left">
                <h2 class="text-6xl font-semibold tracking-tight text-white">
                    Join the Collective
                </h2>
                <p class="text-2xl text-white max-w-[732px]">
                    Help shape Ethereum's future by contributing your skills in
                    research, writing, design, or marketing to drive adoption
                    and help reach its full potential.
                </p>
            </div>

            <div
                class="flex flex-col items-center justify-center lg:justify-start sm:flex-row gap-x-6 gap-y-6"
            >
                <a
                    class=" font-medium max-w-44 border border-white rounded-full py-4 px-6 text-white hover:opacity-65 flex gap-x-4"
                    href="https://discord.gg/2077collective" target="_blank" rel="noopener noreferrer"
                >
                    <Discord />
                    Discord
                </a>
                <a
                    class=" font-medium max-w-44 border border-white rounded-full py-4 px-6 text-white hover:opacity-65 flex gap-x-4"
                    href="https://x.com/2077Collective" target="_blank" rel="noopener noreferrer"            
                >
                    <Twitter />
                    Follow us
                </a>
                <a
                    class=" font-medium max-w-44 border border-white rounded-full py-4 px-6 text-white hover:opacity-65 flex gap-x-4"
                    href="https://www.farcaster.id/c/2077collective" target="_blank" rel="noopener noreferrer"    
                >
                    <Farcaster />
                    Farcaster
                </a>
            </div>
        </div>
    </div>
</section>

<section class="px-6 lg:px-20 py-32">
    <div class="container flex flex-col justify-center gap-y-20">
        <div class="max-w-lg">
            <h2 class="font-semibold text-5xl lg:text-7xl tracking-tight">
                A huge thanks to our friends and supporters
            </h2>
        </div>

        <div
            class="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
            {#each supporterImages as supporterImage}
                <svelte:element
                    this={supporterImage.link ? "a" : "div"}
                    href={supporterImage.link}
                    target={supporterImage.link ? "_blank" : undefined}
                    rel={supporterImage.link
                        ? "noopener noreferrer"
                        : undefined}
                    class="relative group cursor-pointer hover:bg-gray-lightest w-[280px] h-[280px] inline-flex justify-center items-center border"
                >
                    {#if supporterImage.component}
                        <svelte:component this={supporterImage.component} />
                    {/if}

                    {#if supporterImage.imageSrc}
                        <img
                            src={supporterImage.imageSrc}
                            alt={supporterImage.alt}
                            class="grayscale hover:grayscale-0 transition duration-300"
                        />
                    {/if}

                    {#if supporterImage.link}
                        <div
                            class={`absolute bottom-4 right-4 group-hover:inline-flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                supporterImage.darkBackground
                                    ? "text-white"
                                    : ""
                            }`}
                        >
                            <Visit {supporterImage} />
                        </div>
                    {/if}
                </svelte:element>
            {/each}
        </div>
    </div>
</section>

<style>
    .hero {
        background-image: url("/hero.webp");
        background-position: 0;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .banner {
        background-image: url("/banner.webp");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
    }
</style>

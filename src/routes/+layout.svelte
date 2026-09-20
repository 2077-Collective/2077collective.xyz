<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import "../app.css";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>2077 Collective - Ethereum's Unofficial Marketing Department</title>

	<!-- Open Graph Meta Tags -->
	<meta
		property="og:title"
		content="2077 Collective | Ethereum Unofficial Creative Studio™."
	/>
	<meta
		property="og:description"
		content="A league of creatives, researchers, developers, and marketers committed to making Ethereum great again. Ethereum's Unofficial Creative Studio™."
	/>
	<meta property="og:image" content="/open-graph.png" />
	<meta property="og:url" content="https://2077collective.xyz/" />
	<meta property="og:type" content="website" />
	<meta
		property="og:site_name"
		content="2077 Collective | Ethereum Unofficial Creative Studio™."
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="2077 Collective (eth/acc)" />
	<meta
		name="twitter:description"
		content="A league of creatives, researchers, developers, and marketers committed to making Ethereum great again. Ethereum's Unofficial Creative Studio™."
	/>
	<meta name="twitter:image" content="/open-graph.png" />
	<meta name="twitter:url" content="https://x.com/2077Collective" />
	<meta name="twitter:site" content="@2077Collective" />

	<!-- General Meta Tags -->
	<meta
		name="title"
		content="2077 Collective | Ethereum Unofficial Creative Studio™."
	/>
	<meta
		name="description"
		content="A league of creatives, researchers, developers, and marketers committed to making Ethereum great again. Ethereum's Unofficial Creative Studio™."
	/>
	<meta
		name="keywords"
		content="ethereum, evm, crypto research, eip, blockchain"
	/>
	<meta name="author" content="@2077Collective" />
	<meta property="og:url" content="https://2077collective.xyz/" />
	<meta property="og:logo" content="/logo.svg" />
</svelte:head>

<div>
	<Header />
	<slot />
	<Footer />
</div>

<script lang="ts">


	import GithubCard from '$lib/GithubCard.svelte';
	//TODO: project section, pulls from github api when there isnt a specific project section

	import {fly} from 'svelte/transition'

	let counter = 0
    let subtitleCounter = 0
	let names = ['vincent xie', '@icanc']
    let subtitle = ['Where job', 'Woo, new website', 'its so over its so over its so over ', 'sus']
	function increment() {
		counter = (counter < names.length - 1) ? counter + 1 : 0;
	}

	function incrementSubtitle() {
        subtitleCounter = (subtitleCounter < subtitle.length - 1) ? subtitleCounter + 1 : 0;
    }

	export let data
	console.log(data)
	//setInterval(increment, 200)
</script>

<!-- this is me section -->
<div class="flex flex-col bg-indigo-50 justify-center items-center font-baron-regular grow space-y-10">
        <div
                class="text-9xl font-extrabold "
                on:click={increment}
                on:keydown={e => { if (e.key === 'Enter') increment() }}
        >
            {names[counter]}
        </div>
        <div class="text-md text-gray-600">
            {subtitle[subtitleCounter]}
        </div>

</div>
<div class="flex flex-row bg-indigo-50 justify-center items-center font-baron-regular space-x-4">
    <a href="/">
        &lt;&lt;&lt;
    </a>
    <div>
        This website is part of the waterloo frontend engineering webring
    </div>
    <a href="/">
        &gt;&gt;&gt;
    </a>
</div>
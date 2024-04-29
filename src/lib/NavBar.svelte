<script>

import AmogusToggleSwitch from '$lib/AmogusToggleSwitch.svelte'

</script>

<div class="flex flex-row font-baron-regular ">

    <div class="flex flex-row p-2 w-full gap-2">
        <div class="w-10">
            <img src="/amogus.png" alt="when the amogus is sus">
        </div>
        <a href="/" class="my-auto px-3 py-2 font-bold text-gray-900 rounded-xl">
            home
        </a>
        <a href="/blogs" class="my-auto px-3 py-2 font-bold text-gray-900 rounded-xl">
            blog
        </a>
        <a href="/projects" class="my-auto px-3 py-2  font-bold text-gray-900 rounded-xl">
            projects
        </a>
    </div>
    <div class="flex flex-row py-2 px-6 right-0 items-center">
        <AmogusToggleSwitch></AmogusToggleSwitch>
    </div>
</div>


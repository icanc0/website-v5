<script>

    export let data
</script>

<div class="w-full pt-4 px-2 sm:px-6">
    <div class="font-baron-regular text-7xl">
        blogs
    </div>
    <div class="flex flex-col space-y-3 w-full">
        {#each Object.keys(data) as index}
            <div class="flex flex-row space-x-1">

                <div class="inter-normal text-4xl pr-4">
                    {index}
                </div>

                <div class="divide-y-2 divide-gray-400 divide-double flex flex-col w-full">
                    {#each data[index] as blog}
                        <a href="/blogs/{blog.path}" class="text-3xl flex flex-row py-2">
                            <span class="text-left grow">
                                {blog.title}
                            </span>
                            <span class="justify-self-end">
                                {blog.shortDate}
                            </span>
                        </a>
                    {/each}
                    <div></div>
                </div>

            </div>
        {/each}

    </div>
</div>

<script>
    const links = [
        {
            title: "Part 1: Install Software",
            items: [
                { text: "Android Studio", url: "https://developer.android.com/studio" },
                { text: "Android Build Tools tutorial", url: "https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_android.html#doc-exporting-for-android" },
                { text: "Godot", url: "https://godotengine.org/download/" }
            ]
        },
        {
            title: "Part 2: Setting up XR",
            items: [
                { text: "Setting up XR Guide", url: "https://docs.godotengine.org/en/stable/tutorials/xr/setting_up_xr.html" }
            ]
        },
        {
            title: "Part 3: Deploying to Android",
            items: [
                { text: "Deploying to Android Guide", url: "https://docs.godotengine.org/en/stable/tutorials/xr/deploying_to_android.html" }
            ]
        }
    ];
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Godot XR Development Guide</h1>
    {#each links as section}
        <div class="mb-6">
            <h2 class="text-2xl font-semibold mb-3">{section.title}</h2>
            <ul class="list-disc list-inside">
                {#each section.items as item}
                    <li class="mb-2">
                        <a href={item.url} class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                            {item.text}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    {/each}
</div>
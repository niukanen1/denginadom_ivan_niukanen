
<script setup lang="ts">
const { data }=defineProps<{ data: character }>();

</script>

<template>
    <div class="flex w-fit flex-col gap-1 p-3 rounded-md border-[0.1px]">
        <NuxtLink :to="`/character:${data.id}`">
            <img class="max-w-[200px]" :src="data.image" />
            <div class="flex flex-col justify-between">
                <p class="text-lg">{{data.name}}</p>
                <div class="flex flex-row gap-2 items-center">
                    <p class="font-thin text-sm">Gender:</p>
                    <p>{{data.gender}}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
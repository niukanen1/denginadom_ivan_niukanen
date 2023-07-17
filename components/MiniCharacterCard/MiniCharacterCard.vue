
<script setup lang="ts">
const { character }=defineProps<{
    character: character
}>()

</script>

<template>
    <div class="flex flex-col p-2 border-[0.5px] rounded-md">
        <NuxtLink :to="`/character:${character.id}`">
            <img :src="character.image" />
            <p class="text-lg font-bold">{{character.name}}</p>
        </NuxtLink>
    </div>
</template>
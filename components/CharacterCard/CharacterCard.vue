
<script setup lang="ts">
const { data }=defineProps<{ data: character }>(); 
</script>

<template>
    <div class="flex flex-row gap-2 p-3 rounded-xl border-[0.1px] min-w-[300px]">

        <div class="relative">
            <img class="max-w-[200px] rounded-md" :src="data.image" />
            <span class="badge" :class="data.status=='Alive'? 'alive':data.status=='Dead'? 'dead':'unknown'">{{
                data.status}}</span>
        </div>


        <div class="flex flex-col justify-between w-full gap-2">
            <div class="flex flex-col ">
                <NuxtLink :to="`/character:${data.id}`">
                    <p class="text-2xl">{{data.name}}</p>
                </NuxtLink>
                <div class="flex flex-row">
                    <p>{{data.species}}</p>
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <!-- <p>Episodes:</p> -->
                <CharacterCardEpisodeList :episodes-urls="data.episode" />
            </div>
        </div>


    </div>
</template>

<style> @tailwind components;

 .dataDisplay {
     @apply flex flex-row gap-2 justify-between items-center
 }

 .badge {
     @apply px-2 py-1 rounded-full text-white text-sm absolute bottom-1 left-1 shadow-md
 }

 .alive {
     @apply bg-green-600
 }

 .dead {
     @apply bg-red-600
 }

 .unknown {
     @apply bg-zinc-600
 }
</style>